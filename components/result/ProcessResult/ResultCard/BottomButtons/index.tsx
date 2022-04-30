import Image from "next/image";
import Link from "next/link";
import {
  MobileResultCardRightArrowIcon,
  ResultCardBookMarkIcon,
  ResultCardHeartIcon,
  ResultCardLeftArrowIcon,
} from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import { ImageWrapper, MoreButton, StyledRoot } from "./style";

interface Props {
  url: string;
}

function BottomButtons({ url }: Props) {
  return (
    <StyledRoot>
      <ImageWrapper>
        <Image src={ResultCardHeartIcon} alt="likeIcon" />
        <Image src={ResultCardBookMarkIcon} alt="bookmarkIcon" />
      </ImageWrapper>
      <Link href={url} passHref>
        <MoreButton target="_blank">
          바로가기
          <Screen desktop>
            <ResultCardLeftArrowIcon />
          </Screen>
          <Screen mobile>
            <MobileResultCardRightArrowIcon />
          </Screen>
        </MoreButton>
      </Link>
    </StyledRoot>
  );
}

export default BottomButtons;
