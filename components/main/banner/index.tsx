import React from "react";
import { StyledRoot, TitleWrapper, IconWrapper } from "./style";
import { MainBannerCompass } from "public/assets/images";
import Image from "next/image";

const MainBanner = () => {
  return (
    <StyledRoot>
      <TitleWrapper>
        <h1>나에게 맞는 IT강의를 간편하게 찾으세요</h1>
        <h2>광고 없는 정직한 IT강의 비교 서비스, 그로투</h2>
      </TitleWrapper>
      <IconWrapper>
        <Image src={MainBannerCompass} alt="bannerImg" />
      </IconWrapper>
    </StyledRoot>
  );
};

export default MainBanner;
