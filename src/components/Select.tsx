import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material"
import React from "react"

type Props = {
  label: string
  name: string
  onChange: (event: any) => void
  onBlur: (event: any) => void
  value: any
  size?: "small" | "medium"
  options: {
    label: string
    value: any
  }[]
}

const Select: React.FC<Props> = ({
  label,
  name,
  onChange,
  onBlur,
  value,
  size = "small",
  options,
}) => {
  return (
    <FormControl fullWidth size={size}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select
