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

function ProcessTime() {
  const [selectedTime, setSelectedTime] = useState("");
  const [processData, setProcessData] = useRecoilState(processState);
  const timeTypeList = ["긴 강의", "짧은 강의", "상관없음"];
  const getTimeData = useRecoilValue(processState);

  useEffect(() => {
    if (
      getTimeData.timeAsc === true ||
      getTimeData.timeAsc === false ||
      getTimeData.timeAsc === null
    ) {
      const changeType =
        getTimeData.timeAsc === false
          ? "긴 강의"
          : getTimeData.timeAsc === true
          ? "짧은 강의"
          : "상관없음";

      setSelectedTime(changeType);
    }
  }, []);
  const handleTimeClick = (timeType: string) => {
    setSelectedTime(timeType);
  };

  useEffect(() => {
    const changeType =
      selectedTime === "긴 강의"
        ? false
        : selectedTime === "짧은 강의"
        ? true
        : selectedTime === "상관없음"
        ? null
        : undefined;
    const tempProcessData = { ...processData };

    tempProcessData["timeAsc"] = changeType;
    setProcessData(tempProcessData);
  }, [selectedTime]);

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
          <CardTitle></CardTitle>
          <CardChoice>
            <TimeWrapper>
              <p>
                강의 <span>총 완강 시간</span>은 어떤 타입을 선호하시나요?
              </p>
              {timeTypeList.map((timeType, index) => (
                <TypeButton
                  key={index}
                  onTypeClick={handleTimeClick}
                  interestType={timeType}
                  selectedTime={selectedTime}
                />
              ))}
            </TimeWrapper>
          </CardChoice>
          <NextButtonWrapper>
            <Link href="/processPrice" replace passHref>
              <NextButton
                selectedPrice={selectedTime}
                disabled={selectedTime.length > 0 ? false : true}
              >
                완료하기
              </NextButton>
            </Link>
            <NextArrowWrapper>
              {selectedTime.length > 0 ? <NextArrowDisabled /> : <NextArrowAble />}
            </NextArrowWrapper>
          </NextButtonWrapper>
        </ProcessBox>
      </StyledRoot>
    </>
  );
}

export default ProcessTime;
export const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
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
    width: 36rem;
  }
`;

export const CardChoice = styled.section`
  width: 102rem;
  height: 49.3rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0 0 2.8rem 2.8rem;
  backdrop-filter: blur(2rem);
  border: 2px solid white;
  ${applyMediaQuery("mobile")} {
    width: 36rem;
    height: 100%;
  }
`;

export const TimeWrapper = styled.div`
  width: 77.4rem;
  margin: 6.5rem auto 0;
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
    font-size: 1.6rem;
    margin-top: 4rem;
    width: 12.6rem;
    height: 5.2rem;
  }
`;

export const NextArrowWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 4.5rem;
  margin-right: 1.1rem;
  ${applyMediaQuery("mobile")} {
    top: 5.7rem;
    right: 1rem;
  }
`;
