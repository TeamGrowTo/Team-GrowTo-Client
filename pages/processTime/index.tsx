import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { processState } from "store/state";

import { CardChoice, ProcessBox, StyledRoot, TimeWrapper } from "./style";
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
      console.log(getTimeData.timeAsc);
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
                onTimeClick={handleTimeClick}
                timeType={timeType}
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
