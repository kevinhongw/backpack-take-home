import React, { useState } from "react"
import { Transaction, useGetTransactionsQuery } from "./bankAccountsApiSlice"
import { skipToken } from "@reduxjs/toolkit/query"
import {
  Box,
  Divider,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import Card from "../../components/Card"
import { formatCurrency } from "../../helpers/string"
import TransactionFilter from "./TransactionFilter"
import SearchInput from "../../components/SearchInput"

type Props = {
  bankAccountId: string | undefined
}

type Filter = {
  type?: "debit" | "credit"
  minAmount?: number
  maxAmount?: number
}

const filterTransaction = (
  transactions: Transaction[],
  filter: Filter,
  search: string,
) => {
  return transactions
    .filter(transaction => {
      let shouldFilter = true
      if (filter.type === "credit" && transaction.amount_in_cents <= 0) {
        shouldFilter = false
      }
      if (filter.type === "debit" && transaction.amount_in_cents > 0) {
        shouldFilter = false
      }
      if (
        filter.minAmount &&
        Math.abs(transaction.amount_in_cents) < filter.minAmount * 100
      ) {
        shouldFilter = false
      }
      if (
        filter.maxAmount &&
        Math.abs(transaction.amount_in_cents) > filter.maxAmount * 100
      ) {
        shouldFilter = false
      }

      return shouldFilter
    })
    .filter(transaction => transaction.description.includes(search))
}

const BankAccountTransactions: React.FC<Props> = ({ bankAccountId }) => {
  const { data: transactions = [], isFetching } = useGetTransactionsQuery(
    bankAccountId ?? skipToken,
  )
  const [filter, setFilter] = useState<Filter>({})
  const [search, setSearch] = useState<string>("")

  const sortedTransactions = [...transactions].sort((a, b) => {
    return (new Date(b.date) as any) - (new Date(a.date) as any)
  })

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const handleFilter = (filter: Filter) => {
    setFilter(filter)
  }

  const filteredTransaction = filterTransaction(
    sortedTransactions,
    filter,
    search,
  )

  return (
    <Box>
      <Stack direction={"row"} marginBottom="8px" gap="8px" flexWrap={"wrap"}>
        <Typography variant="h4">Transactions</Typography>
        <Box flexGrow={1} />
        <SearchInput onSearch={handleSearch} />
        <TransactionFilter onFilter={handleFilter} filter={filter} />
      </Stack>
      {isFetching && <Skeleton width="100%" height="200px" />}
      <Box
        sx={theme => ({
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        })}
      >
        <TableContainer component={Card}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Date</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
                <TableCell>
                  <strong>Type</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Amount</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransaction.map(row => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: row.amount_in_cents > 0 ? "#608D64" : "#C44E42",
                    }}
                  >
                    {formatCurrency(row.amount_in_cents)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        sx={theme => ({
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        })}
      >
        <Card>
          {filteredTransaction.map(row => (
            <>
              <Box
                display={"flex"}
                alignItems={"flex-end"}
                justifyContent={"space-between"}
                padding="16px"
              >
                <Stack>
                  <Typography variant="h6">{row.description}</Typography>
                  <Typography variant="subtitle1">{row.date}</Typography>
                  <Typography variant="subtitle1">{row.type}</Typography>
                </Stack>
                <Typography
                  color={row.amount_in_cents > 0 ? "#608D64" : "#C44E42"}
                >
                  {formatCurrency(row.amount_in_cents)}
                </Typography>
              </Box>
              <Divider flexItem />
            </>
          ))}
        </Card>
      </Box>
    </Box>
  )
}

export default BankAccountTransactions
