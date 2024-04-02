import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Header } from "@/components/Header";
import { useState } from "react";

const basePallete = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  ...basePallete,
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  ...basePallete,
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);
  const onThemeChange = (_: any, isDark: boolean) => {
    setTheme(isDark ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onThemeChange={onThemeChange} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
