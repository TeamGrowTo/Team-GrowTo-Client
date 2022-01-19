import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import Image from "next/image";
import Router from "next/router";
import { ProcessPlayIcon, ProcessSquareIcon } from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { processState } from "store/state";
import Screen from "styles/Screen";

import { CardChoice, PlayIcon, ProcessBox, SquareIcon, StyledRoot, TimeWrapper } from "./style";
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
    Router.push("/processPrice");
  };

  useEffect(() => {
    const changeType =
      selectedTime === "긴 강의" ? false : selectedTime === "짧은 강의" ? true : null;
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
