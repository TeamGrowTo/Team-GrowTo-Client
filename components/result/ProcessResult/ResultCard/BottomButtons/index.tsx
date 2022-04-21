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

import { BookMarkImageWrapper, HeartImageWrapper, MoreButton, StyledRoot } from "./style";

interface Props {
  url: string;
}

function BottomButtons({ url }: Props) {
  return (
    <StyledRoot>
      <HeartImageWrapper>
        <Image src={ResultCardHeartIcon} alt="likeIcon" />
      </HeartImageWrapper>
      <BookMarkImageWrapper>
        <Image src={ResultCardBookMarkIcon} alt="bookmarkIcon" />
      </BookMarkImageWrapper>
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
