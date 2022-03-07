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
          <meta property="og:title" content="IT 강의 비교 한눈에, 그로투" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/60960130/156963144-d1eb3c4b-4ba5-4db0-a281-aa23bc60afe0.png"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
