import Image from "next/image";
import Link from "next/link";
import { CategoryReduceIcon, CategoryToProcessIcon } from "public/assets/icons";
import React, { useState } from "react";

import {
  Description,
  Highlight,
  ImageWrapper,
  Line,
  RedirectButton,
  ReduceCustomLectureButton,
  ReduceIconWrapper,
  StickyContent,
  StyledRoot,
  Title,
} from "./style";

const DesktopProcessButton = function () {
  const [isOpen, setIsOpen] = useState(true);

  const onClickReduceButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledRoot>
      <StickyContent isOpen={isOpen}>
        {isOpen ? (
          <ReduceIconWrapper onClick={onClickReduceButton}>
            <Image src={CategoryReduceIcon} alt="categoryReduceIcon" quality={100} />
          </ReduceIconWrapper>
        ) : (
          <ReduceCustomLectureButton onClick={onClickReduceButton}>
            <span>맞춤강의</span>
          </ReduceCustomLectureButton>
        )}
        <Link href="/processTag" passHref>
          <RedirectButton isOpen={isOpen}>
            <Title>
              맞춤 강의 찾기
              <ImageWrapper>
                <Image src={CategoryToProcessIcon} alt="categoryToProcess" quality={100} />
              </ImageWrapper>
            </Title>
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
