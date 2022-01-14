import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import Link from "next/link";

import { CardChoice, ProcessBox, StyledRoot, TimeWrapper, TypeButton } from "./style";
function ProcessTime() {
  const timeTypeList = ["긴 강의", "짧은 강의", "상관없음"];

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
              <TypeButton key={index}>{timeType}</TypeButton>
            ))}
          </TimeWrapper>
        </CardChoice>
      </ProcessBox>
    </StyledRoot>
  );
}

export default ProcessTime;
