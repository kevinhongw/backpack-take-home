import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import React from "react"

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0e2846" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h4">Backpack</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
