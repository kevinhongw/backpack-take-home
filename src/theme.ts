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
      fontWeight: "700",
    },
    h2: {
      fontSize: "38px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "30px",
      fontWeight: "400",
    },
    h5: {
      fontSize: "24px",
      fontWeight: "400",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "400",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "400",
      color: "#333",
    },
    label: {
      fontFamily: "montserrat",
      fontSize: "14px",
      fontWeight: "300",
    },
    label2: {
      fontFamily: "montserrat",
      fontSize: "14px",
      fontWeight: "700",
    },
    info: {
      fontFamily: "montserrat",
      fontSize: "12px",
      fontWeight: "300",
    },
    fontFamily: "montserrat",
  },
})

declare module "@mui/material/styles" {
  interface Theme {
    typography: {
      label: string
    }
  }
  interface TypographyVariants {
    label: React.CSSProperties
    info: React.CSSProperties
    label2: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties
    info: React.CSSProperties
    label2?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true
    info: true
    label2: true
  }
}
