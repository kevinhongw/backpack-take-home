import React from "react"
import { Box, Container } from "@mui/material"

import Header from "../components/Header"

type Props = {}

const BankAccountPage: React.FC<Props> = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8" }}>
      <Header />
      <Container maxWidth="lg"></Container>
    </Box>
  )
}

export default BankAccountPage
