import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import React from "react"
import Logo from "../assets/backpack-logo.svg"

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box component="img" src={Logo} height="100%" />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
