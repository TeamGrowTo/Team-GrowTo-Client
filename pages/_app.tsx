import "public/assets/fonts/font.css";

import * as gtag from "libs/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Layout from "../components/common/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
