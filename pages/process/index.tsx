import SEO from "components/common/SEO";
import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import Image from "next/image";
import Link from "next/link";
import {
  NextArrowAble,
  NextArrowDisabled,
  ProcessPlayIcon,
  ProcessSquareIcon,
} from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { processState } from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
import Screen from "styles/Screen";

function Process() {
  return (
    <>
      <SEO title="그로투 - 나에게 맞는 강의 찾기 " content="당신에게 맞는 IT강의를 찾는 중이에요" />
      <StyledRoot>
        <Screen desktop>
          <>
            <div></div>
            <PlayIcon>
              <Image src={ProcessPlayIcon} alt="processPlay" />
            </PlayIcon>
            <SquareIcon>
              <Image src={ProcessSquareIcon} alt="processSqaure" />
            </SquareIcon>
          </>
        </Screen>
        <ProcessBox>
          <Title></Title>
          <CardChoice>
            <CategoryWrapper>
              <Screen desktop>
                <p>
                  <span>강의 분야</span>를 선택하세요
                </p>
              </Screen>
            </CategoryWrapper>
            <SkillWrapper>
              <Screen desktop>
                <p>
                  <span>강의 세부 분야</span>를 선택하세요
                </p>
              </Screen>
            </SkillWrapper>
          </CardChoice>
          <NextButtonWrapper>
            {/* <Link href="/processTag" replace passHref>
               <NextButton
                selectedPrice={selectedTime}
                disabled={selectedTime.length > 0 ? false : true}
              >
                다음
              </NextButton> 
            </Link> */}
            <NextArrowWrapper>
              {/* {selectedTime.length > 0 ? <NextArrowDisabled /> : <NextArrowAble />} */}
            </NextArrowWrapper>
          </NextButtonWrapper>
        </ProcessBox>
      </StyledRoot>
    </>
  );
}

export default Process;
export const StyledRoot = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  top: 6.45rem;
  right: 0;
`;

export const SquareIcon = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 11.1rem;
`;

export const ProcessBox = styled.div`
  position: relative;
  width: 102rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;

export const CardChoice = styled.section`
  width: 102rem;
  height: 66rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2.8rem;
  backdrop-filter: blur(2rem);
  border: 2px solid white;
  margin-top: 4rem;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const CategoryWrapper = styled.div`
  width: 77.4rem;
  margin: 6rem auto 0 6.4rem;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 2.4rem;
    color: ${colors.subBlack};
    margin-bottom: 2rem;
  }
  & > p > span {
    color: ${colors.subOrange};
  }
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    margin: 3.2rem auto 5rem;
    line-height: 2.8rem;
    & > p {
      font-size: 2rem;
    }
  }
`;

export const SkillWrapper = styled.div`
  width: 77.4rem;
  margin: 6rem auto 0 6.4rem;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 2.4rem;
    color: ${colors.subBlack};
    margin-bottom: 2rem;
  }
  & > p > span {
    color: ${colors.subOrange};
  }
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    margin: 3.2rem auto 5rem;
    line-height: 2.8rem;
    & > p {
      font-size: 2rem;
    }
  }
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const NextButton = styled.button<{ selectedPrice: string }>`
  margin-left: auto;
  margin-top: 2.4rem;
  margin-bottom: 5.8rem;
  width: 22.4rem;
  height: 6rem;
  background: ${({ selectedPrice }) =>
    selectedPrice.length > 0 ? `${colors.mainBlue}` : `${colors.gray2}`};
  font-size: 2.4rem;
  font-family: "Pretendard-Bold";
  border-radius: 4.8rem;
  padding-right: 1.7rem;
  color: ${({ selectedPrice }) => (selectedPrice.length > 0 ? "white" : `${colors.gray4}`)};
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    margin-top: 4rem;
    width: 9.8rem;
    height: 5.2rem;
    font-size: 1.6rem;
    margin-right: 2.4rem;
  }
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;

export const NextArrowWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 6.5rem;
  margin-right: 0.9rem;
  ${applyMediaQuery("mobile")} {
    top: 5.9rem;
    right: 1rem;
    margin-right: 3.5rem;
  }
`;
