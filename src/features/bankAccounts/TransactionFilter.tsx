import { Box, Button, Card, Popover, Stack, TextField } from "@mui/material"
import React from "react"
import TuneIcon from "@mui/icons-material/Tune"
import Select from "../../components/Select"
import { useFormik } from "formik"
import * as Yup from "yup"

type Props = {
  onFilter: (filter: any) => void
  filter: Record<string, unknown>
}

const TransactionFilter: React.FC<Props> = ({ onFilter, filter }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleReset = () => {
    resetForm()
    onFilter({})
    setAnchorEl(null)
  }

  const { values, handleChange, handleBlur, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        type: filter?.type || "",
        minAmount: filter?.minAmount || "",
        maxAmount: filter?.maxAmount || "",
      },
      validationSchema: Yup.object().shape({
        type: Yup.string().optional(),
        minAmount: Yup.number().optional().min(0),
        maxAmount: Yup.number().optional().min(0),
      }),
      onSubmit: values => {
        setAnchorEl(null)
        onFilter({
          type: values.type,
          minAmount: Number(values.minAmount),
          maxAmount: Number(values.maxAmount),
        })
      },
    })

  const open = Boolean(anchorEl)

  return (
    <>
      <Button variant="text" startIcon={<TuneIcon />} onClick={handleClick}>
        Filter
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Card sx={{ width: "250px", padding: "16px" }}>
          <form onSubmit={handleSubmit}>
            <Stack gap="16px">
              <Select
                label="Type"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                options={[
                  { value: "debit", label: "Debit" },
                  { value: "credit", label: "Credit" },
                ]}
              />
              <TextField
                type="number"
                name="minAmount"
                label="Min Amount"
                fullWidth
                size="small"
                value={values.minAmount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                type="number"
                name="maxAmount"
                label="Max Amount"
                fullWidth
                size="small"
                value={values.maxAmount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  type="submit"
                >
                  Filter
                </Button>
              </Box>
            </Stack>
          </form>
        </Card>
      </Popover>
    </>
  )
}

export default TransactionFilter
