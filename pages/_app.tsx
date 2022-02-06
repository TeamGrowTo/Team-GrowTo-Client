import "public/assets/fonts/font.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Layout from "../components/common/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
