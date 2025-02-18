import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      background: {
        body: string;
      };
      boxShadow: {
        light: string;
        medium: string;
        dark: string;
      };
    };
  }
  interface ThemeOptions {
    customColors?: {
      background?: {
        body?: string;
      };
      boxShadow?: {
        light?: string;
        medium?: string;
        dark?: string;
      };
    };
  }
}

const color = {
  primary: {
    main: "#4AB1F1",
    light: "#A0D8FB",
    dark: "#0077C0",
  },
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: color.primary.main,
      light: color.primary.light,
      dark: color.primary.dark,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: color.primary.main,
          color: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: color.primary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: "#0077C0",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          color: "#fff",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  customColors: {
    background: {
      body: "#F1F9FE",
    },
    boxShadow: {
      light: `0 2px 20px -5px ${color.primary.main}`,
      medium: `0 2px 40px -5px ${color.primary.main}`,
      dark: `0 2px 40px 0px ${color.primary.main}`,
    },
  },
});

export default theme;
