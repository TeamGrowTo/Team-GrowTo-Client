import Image from "next/image";
import { MainBannerCompass, MobileMainBannerCompass } from "public/assets/images";
import React from "react";
import Screen from "styles/Screen";

import { ImageWrapper, StyledRoot, TitleWrapper } from "./style";

const Banner = function () {
  return (
    <StyledRoot>
      <TitleWrapper>
        <h1>나에게 맞는 IT강의를 간편하게 찾으세요</h1>
        <p>광고 없는 정직한 IT강의 비교 서비스, 그로투</p>
      </TitleWrapper>
      <ImageWrapper>
        <Screen desktop>
          <Image src={MainBannerCompass} alt="bannerImg" width={545} height={289} quality={100} />
        </Screen>
        <Screen mobile>
          <Image
            src={MobileMainBannerCompass}
            alt="bannerImg"
            width={304}
            height={135}
            quality={100}
          />
        </Screen>
      </ImageWrapper>
    </StyledRoot>
  );
};

export default Banner;
