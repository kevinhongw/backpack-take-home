import { Box, Button, Stack, Typography } from "@mui/material"
import React, { useState } from "react"

type Props = {
  label: string
  value: string
}

const ConcealedLabel: React.FC<Props> = ({ label, value }) => {
  const [show, setShow] = useState<boolean>(false)

  const handleToogle = () => {
    setShow(state => !state)
  }
  const formattedValue = show
    ? value
    : `*${value.slice(value.length - 4, value.length)}`
  return (
    <Stack direction={"row"} gap="8px" alignItems={"center"}>
      <Typography variant="label">{label}</Typography>
      <Typography variant="label2">{formattedValue}</Typography>
      <Button variant="text" size="small" onClick={handleToogle}>
        {!show ? "Show" : "Hide"}
      </Button>
    </Stack>
  )
}

export default ConcealedLabel
