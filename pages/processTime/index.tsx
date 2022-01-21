import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import Image from "next/image";
import Router from "next/router";
import { ProcessPlayIcon, ProcessSquareIcon } from "public/assets/icons";
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
    setTimeout(() => {
      Router.replace("/processPrice");
    }, 1000);
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
      </ProcessBox>
    </StyledRoot>
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
  margin-bottom: 14.2rem;
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
