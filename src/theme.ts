import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      light: "#3561fd",
      main: "#033AFC",
      dark: "#022eca",
    },
    secondary: {
      light: "#324380",
      main: "#24305B",
      dark: "#161d36",
    },
    success: {
      light: "#7ba57f",
      main: "#608D64",
      dark: "#4b6f4e",
    },
    warning: {
      light: "#ffda53",
      main: "#FFCF20",
      dark: "#ecb900",
    },
    error: {
      light: "#d07269",
      main: "#C44E42",
      dark: "#a13c32",
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: "48px",
      fontWeight: "500",
    },
    h2: {
      fontSize: "38px",
      fontWeight: "500",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "500",
    },
    label: {
      fontSize: "14px",
      fontWeight: "300",
    },
    info: {
      fontSize: "12px",
      fontWeight: "300",
    },
    fontFamily: "Montserrat_",
  },
})

declare module "@mui/material/styles" {
  interface TypographyVariants {
    label: React.CSSProperties
    info: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties
    info: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true
    info: true
  }
}
