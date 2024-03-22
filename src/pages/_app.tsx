import { ThemeProvider, type DefaultTheme } from "styled-components";
import { GlobalStyle, defaultTheme } from "@/styles";
import type { AppProps } from "next/app";

const theme: DefaultTheme = defaultTheme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
