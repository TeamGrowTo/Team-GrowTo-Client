import Image from "next/image";
import Link from "next/link";
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
import Screen from "styles/Screen";

import {
  ArrowToCircleWrapper,
  CategoryComment,
  CircleWrapper,
  GraphWrapper,
  MainToCategory,
  MainToProcess,
  MainToStory,
  MobileCircleContainer,
  ResultCardComment,
  ResultCardWrapper,
  StoryComment,
  StyledRoot,
} from "./style";
function MainTo() {
  return (
    <StyledRoot>
      <MainToCategory>
        <Screen desktop>
          <CircleWrapper>
            <Image src={MainCircleImg} alt="mainCircle" quality={100} />
          </CircleWrapper>
        </Screen>
        <Screen desktop>
          <ArrowToCircleWrapper>
            <Image src={ArrowToCircle} alt="arrowToCircle" quality={100} />
          </ArrowToCircleWrapper>
        </Screen>

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
          <Link href="/category" passHref>
            <button>
              모든 강의 한눈에 보기 &nbsp;
              <Image src={nextArrow} alt="nextArrow" quality={100} />
            </button>
          </Link>
        </CategoryComment>
        <Screen mobile>
          <MobileCircleContainer>
            <CircleWrapper>
              <Image src={MainCircleImg} alt="mainCircle" quality={100} />
            </CircleWrapper>
            <ArrowToCircleWrapper>
              <Image src={ArrowToCircle} alt="arrowToCircle" quality={100} />
            </ArrowToCircleWrapper>
          </MobileCircleContainer>
        </Screen>
      </MainToCategory>

      <MainToProcess>
        <ResultCardComment>
          <div>
            <Image src={RecommendIcon} alt="recommendIcon" quality={100} />
            <p>강의 추천 받기</p>
          </div>
          <p>언제 다 비교하지?</p>
          <p>
            간단한 선택만으로 내게 맞는
            <br />
            3가지 강의를 추천해드려요
          </p>
          <Link href="/process" passHref>
            <button>
              맞춤 강의 찾기 &nbsp;
              <Image src={nextArrow} alt="nextArrow" quality={100} />
            </button>
          </Link>
        </ResultCardComment>
        <ResultCardWrapper>
          <Image src={MainResultCard} alt="mainResultCard" quality={100} />
        </ResultCardWrapper>
      </MainToProcess>

      <MainToStory>
        <Screen desktop>
          <GraphWrapper>
            <Image src={GraphImg} alt="growGraph" quality={100} />
          </GraphWrapper>
        </Screen>
        <StoryComment>
          <div>
            <Image src={EyeIcon} alt="eyeIcon" quality={100} />
            <p>그로투 이야기</p>
          </div>
          <p>성장에만 집중할 수 있게</p>
          <p>
            강의 비교 하기가 너무 힘든 현실,
            <br />
            그래서 직접 만들었어요
          </p>
          <Link
            href="https://lud2ns.notion.site/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
            passHref
          >
            <button>
              그로투 이야기 보러가기 &nbsp;
              <Image src={nextArrow} alt="nextArrow" quality={100} />
            </button>
          </Link>
        </StoryComment>
        <Screen mobile>
          <GraphWrapper>
            <Image src={GraphImg} alt="growGraph" quality={100} />
          </GraphWrapper>
        </Screen>
      </MainToStory>
    </StyledRoot>
  );
}

export default MainTo;
