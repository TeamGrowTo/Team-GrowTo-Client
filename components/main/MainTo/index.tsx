import Image from "next/image";
import {
  ArrowToCircle,
  EyeIcon,
  GraphImg,
  MainCircleImg,
  MainResultCard,
  nextArrow,
  RecommendIcon,
  ZoomIcon,
} from "public/assets/images";
import React from "react";

import {
  ArrowToCircleWrapper,
  CategoryComment,
  CircleWrapper,
  MainToCategory,
  MainToProcess,
  MainToStory,
  StyledRoot,
} from "./style";
function MainTo() {
  return (
    <StyledRoot>
      <MainToCategory>
        <CircleWrapper>
          <Image src={MainCircleImg} alt="mainCircle" quality={100} />
        </CircleWrapper>
        <ArrowToCircleWrapper>
          <Image src={ArrowToCircle} alt="arrowToCircle" quality={100} />
        </ArrowToCircleWrapper>

        <CategoryComment>
          <div>
            <Image src={ZoomIcon} alt="arrowToCircle" quality={100} />
            <p>한 번에 둘러보기</p>
          </div>
          <p>흩어진 강의들 한 눈에</p>
          <p>
            20개이상 사이트에 흩어진
            <br />
            강의들을 한 곳에 모았어요
          </p>
          <button>
            모든 강의 한눈에 보기 &nbsp;
            <Image src={nextArrow} alt="nextArrow" quality={100} />
          </button>
        </CategoryComment>
      </MainToCategory>
      <MainToProcess></MainToProcess>
      <MainToStory></MainToStory>
    </StyledRoot>
  );
}

export default MainTo;
