export const formatCurrency = (cents?: number) => {
  if (!cents) {
    return "N/A"
  }

  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
