import Image from "next/image";
import { MainBannerCompass, MobileMainBannerCompass } from "public/assets/images";
import React from "react";
import Screen from "styles/Screen";

import { ImageWrapper, StyledRoot, TitleWrapper } from "./style";

function SecondBanner() {
  return (
    <StyledRoot>
      <TitleWrapper>
        <h1>
          <div>내게 맞는 IT강의</div>
          <div>한 눈에, 간편하게 찾기</div>
        </h1>
        <p>강의 찾는 시간 줄이고 성장에만 집중하세요, 그로투</p>
      </TitleWrapper>
      <ImageWrapper>
        <Screen desktop>
          <Image src={MainBannerCompass} alt="bannerImg" quality={100} />
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
}

export default SecondBanner;
