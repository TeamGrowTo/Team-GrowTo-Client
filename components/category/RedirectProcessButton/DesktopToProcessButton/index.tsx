import Image from "next/image";
import Link from "next/link";
import { CategoryToProcessIcon } from "public/assets/icons";
import React from "react";

import {
  Description,
  Highlight,
  ImageWrapper,
  Line,
  RedirectButton,
  StickyContent,
  StyledRoot,
} from "./style";

const DesktopProcessButton = function () {
  return (
    <StyledRoot>
      <StickyContent>
        <Link href="/processTag" passHref>
          <RedirectButton>
            <h3>
              맞춤 강의 찾기
              <ImageWrapper>
                <Image src={CategoryToProcessIcon} alt="categoryToProcess" />
              </ImageWrapper>
            </h3>
            <Line></Line>
            <Description>
              <span>
                <Highlight>*5초</Highlight>면 나에게 맞는
              </span>
              <span> 강의를 찾을 수 있어요</span>
            </Description>
          </RedirectButton>
        </Link>
      </StickyContent>
    </StyledRoot>
  );
};

export default DesktopProcessButton;
