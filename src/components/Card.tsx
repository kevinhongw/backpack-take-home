import { Box } from "@mui/material"
import React from "react"
type Props = {
  sx?: Record<string, unknown>
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children, sx }) => {
  return (
    <Box
      border={`1px solid #eee`}
      borderRadius={"4px"}
      sx={{ backgroundColor: "#fff", ...sx }}
    >
      {children}
    </Box>
  )
}

export default Card
