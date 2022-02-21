import "public/assets/fonts/font.css";

import type { AppProps } from "next/app";
import Head from "next/head";
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
        <Head>
          <meta property="og:url" content="https://www.growto.kr/" />
          <meta property="og:title" content="Growto :: IT강의 비교 플랫폼 서비스" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="public/assets/icons/metaLogo.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
