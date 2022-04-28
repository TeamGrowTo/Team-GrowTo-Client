import Image from "next/image";
import Link from "next/link";
import { CategoryToProcessIcon } from "public/assets/icons";
import React from "react";

import { Description, Highlight, ImageWrapper, RedirectButton, StyledRoot } from "./style";

const MobileProcessButton = function () {
  return (
    <StyledRoot>
      <Description>
        <span>
          <Highlight>*5초</Highlight>면 나에게 맞는 강의를 찾을 수 있어요
        </span>
      </Description>
      <Link href="/processTag" passHref>
        <RedirectButton>
          <h3>
            맞춤 강의 찾기
            <ImageWrapper>
              <Image src={CategoryToProcessIcon} alt="categoryToProcess" />
            </ImageWrapper>
          </h3>
        </RedirectButton>
      </Link>
    </StyledRoot>
  );
};

export default MobileProcessButton;
