import ReportIcon from "public/assets/icons/reportIcon.svg";
import React from "react";

import ReportSection from "./ReportSection";
import { Line, StyledRoot, Wrapper } from "./style";

export default function MainReport() {
  const TotalCompare = {
    Icon: ReportIcon,
    title: "총 비교 강의",
    count: 250,
    unit: "개",
  };
  const CustomSearch = {
    Icon: ReportIcon,
    title: "맞춤 강의 찾기",
    count: 3500,
    unit: "회",
  };
  const RequestCompare = {
    Icon: ReportIcon,
    title: "비교 요청",
    count: 99,
    unit: "건",
  };

  return (
    <StyledRoot>
      <Wrapper>
        <ReportSection reportInfo={TotalCompare} />
        <Line />
        <ReportSection reportInfo={CustomSearch} />
        <Line />
        <ReportSection reportInfo={RequestCompare} />
      </Wrapper>
    </StyledRoot>
  );
}
