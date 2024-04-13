import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material"
import React from "react"
import {
  useGetBankAccountBalanceQuery,
  useGetBankAccountsQuery,
} from "./bankAccountsApiSlice"
import { skipToken } from "@reduxjs/toolkit/query"
import { formatCurrency } from "../../helpers/string"
import ConcealedLabel from "../../components/ConcealedLabel"
import Card from "../../components/Card"

type Props = {
  bankAccountId: string | undefined
}

const BankAccountInfo: React.FC<Props> = ({ bankAccountId }) => {
  const { bankAccount, isFetching: isAccountFetching } =
    useGetBankAccountsQuery(undefined, {
      selectFromResult: ({ data, ...response }) => ({
        ...response,
        bankAccount: data?.[0],
        // Use the following when the account id is passed in from url query param
        // bankAccount: data?.find(account => account.id === bankAccountId),
      }),
    })
  const { data: bankAccountBalance, isFetching: isBalanceFetching } =
    useGetBankAccountBalanceQuery(bankAccount?.id ?? skipToken)

  const isLoading = isAccountFetching || isBalanceFetching
  const hasData = !!bankAccount && !!bankAccountBalance

  return (
    <Card sx={{ padding: "16px" }}>
      {isLoading && <Skeleton width={"100%"} height="200px" />}
      {!isLoading && hasData && (
        <>
          <Typography variant="h5">{bankAccount.name}</Typography>
          <Stack
            margin={"32px 0"}
            direction={"row"}
            alignItems={"flex-end"}
            gap={"48px"}
            flexWrap={"wrap"}
          >
            <Box>
              <Typography variant="h4">
                {formatCurrency(bankAccountBalance.available_balance_in_cents)}
              </Typography>
              <Typography variant="subtitle1">Available balance</Typography>
            </Box>

            <Box>
              <Typography variant="h5">
                {formatCurrency(bankAccountBalance.pending_balance_in_cents)}
              </Typography>
              <Typography variant="subtitle1">Current balance</Typography>
            </Box>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            gap={"16px"}
            alignItems={"center"}
            marginTop="16px"
            flexWrap={"wrap"}
          >
            <ConcealedLabel
              label="Account number"
              value={bankAccount.account_number}
            />
            <Divider orientation="vertical" flexItem />
            <ConcealedLabel
              label="Routing number"
              value={bankAccount.routing_number}
            />
          </Stack>
        </>
      )}
    </Card>
  )
}

export default BankAccountInfo
