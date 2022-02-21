import Head from "next/head";
import React from "react";

interface SEOProps {
  title: string;
  content: string;
}

function SEO({
  title = "그로투 - IT강의 비교 한 눈에",
  content = "성장을 위해 투자를 하려는 당신이 가장 최고의 선택을 할 수 있게, 그로투에서는 20여개 이상의 IT강의 사이트들에 흩어져 있는 강의들을 한 눈에, 복잡한 상세페이지를 정보를 쉽게 확인 할 수 있어요",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Head>
  );
}

export default SEO;
