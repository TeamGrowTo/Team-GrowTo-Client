import Image from "next/image";
import { MainBannerCompass } from "public/assets/images";
import React from "react";

import { ImageWrapper, StyledRoot, TitleWrapper } from "./style";

const Banner = function () {
  return (
    <StyledRoot>
      <TitleWrapper>
        <h1>나에게 맞는 IT강의를 간편하게 찾으세요</h1>
        <p>광고 없는 정직한 IT강의 비교 서비스, 그로투</p>
      </TitleWrapper>
      <ImageWrapper>
        <Image src={MainBannerCompass} alt="bannerImg" width={580} height={297} />
      </ImageWrapper>
    </StyledRoot>
  );
};

export default Banner;
