import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "::-webkit-scrollbar": {
            width: 8,
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: 12,
            backgroundColor: "rgba(0,0,0,0.0)",
          },
          "&:hover": {
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.4)",
            },
          },
        }}
      />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
