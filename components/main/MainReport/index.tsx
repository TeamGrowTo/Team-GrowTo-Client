import React from "react";
import { ReportLine } from "public/assets/icons";
import { StyledRoot, Wrapper } from "./style";

export default function MainReport() {
  return (
    <StyledRoot>
      <Wrapper>
        <TotalCompare></TotalCompare>
        <ReportLine />
        <CustomSearch></CustomSearch>
        <ReportLine />
        <RequestCompare></RequestCompare>
      </Wrapper>
    </StyledRoot>
  );
}
