import React from "react"
import { Box, Container, Stack } from "@mui/material"
import { useParams } from "react-router-dom"

import Header from "../components/Header"
import BankAccountInfo from "../features/bankAccounts/BankAccountInfo"
import BankAccountTransactions from "../features/bankAccounts/BankAccountTransactions"

type Props = {}

const BankAccountPage: React.FC<Props> = () => {
  const { bankAccountId } = useParams()

  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="md" sx={{ height: "100%", padding: "32px" }}>
        <Stack gap="32px">
          <BankAccountInfo bankAccountId={bankAccountId} />
          <BankAccountTransactions bankAccountId={bankAccountId} />
        </Stack>
      </Container>
    </Box>
  )
}

export default BankAccountPage
