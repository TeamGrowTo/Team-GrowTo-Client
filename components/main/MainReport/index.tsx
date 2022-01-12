import React from "react";
import { ReportLine } from "public/assets/icons";
import { StyledRoot, Wrapper } from "./style";
import ReportSection from "./ReportSection";
import { ReportIcon } from "public/assets/icons";

export default function MainReport() {
  const TotalCompare = {
    reportIcon: { ReportIcon },
    reportTitle: "총 비교 강의",
    reportCount: 250,
    reportUnit: "개",
  };
  const CustomSearch = {
    reportIcon: ReportIcon,
    reportTitle: "맞춤 강의 찾기",
    reportCount: 3500,
    reportUnit: "회",
  };
  const RequestCompare = {
    reportIcon: ReportIcon,
    reportTitle: "비교 요청",
    reportCount: 99,
    reportUnit: "건",
  };

  return (
    <StyledRoot>
      <Wrapper>
        <ReportSection reportInfo={TotalCompare} />
        <ReportLine />
        <ReportSection reportInfo={CustomSearch} />
        <ReportLine />
        <ReportSection reportInfo={RequestCompare} />
      </Wrapper>
    </StyledRoot>
  );
}
