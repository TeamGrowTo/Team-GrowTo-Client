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
  ResultCardComment,
  ResultCardWrapper,
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
      <MainToProcess>
        <ResultCardComment>
          <div>
            <Image src={RecommendIcon} alt="arrowToCircle" quality={100} />
            <p>강의 추천 받기</p>
          </div>
          <p>언제 다 비교하지?</p>
          <p>
            간단한 선택만으로 내게 맞는
            <br />
            3가지 강의를 추천해드려요
          </p>
          <button>
            맞춤 강의 찾기 &nbsp;
            <Image src={nextArrow} alt="nextArrow" quality={100} />
          </button>
        </ResultCardComment>
        <ResultCardWrapper>
          <Image src={MainResultCard} alt="mainResultCard" quality={100} />
        </ResultCardWrapper>
      </MainToProcess>
      <MainToStory></MainToStory>
    </StyledRoot>
  );
}

export default MainTo;
