import Image from "next/image";
import { MainBannerCustomLecture, MobileMainBannerCustomLecture } from "public/assets/images";
import React from "react";
import Screen from "styles/Screen";

import { Description, ImageWrapper, StyledRoot, Title, TitleWrapper } from "./style";

function SecondBanner() {
  return (
    <StyledRoot>
      <TitleWrapper>
        <Title>
          <div>무슨 강의 듣지..?</div>
          <div>{"고민된다면 '맞춤강의'"}</div>
        </Title>
        <Description>{"'맞춤 강의 찾기' Click! 5초만에 강의를 찾을 수 있어요"}</Description>
      </TitleWrapper>
      <ImageWrapper>
        <Screen desktop>
          <Image
            src={MainBannerCustomLecture}
            width={547}
            height={288}
            alt="bannerImg"
            quality={100}
          />
        </Screen>
        <Screen mobile>
          <Image
            src={MobileMainBannerCustomLecture}
            alt="bannerImg"
            width={288}
            height={131}
            quality={100}
          />
        </Screen>
      </ImageWrapper>
    </StyledRoot>
  );
}

export default SecondBanner;
