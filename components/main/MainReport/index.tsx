import ReportSection from "components/main/MainReport/ReportSection";
import {
  getLectureFindNumber,
  getLectureRequestNumber,
  getLectureTotalNumber,
} from "pages/apis/count.api";
import { FindIcon, RequestIcon, TotalIcon } from "public/assets/icons";
import React, { useEffect, useState } from "react";

import { Line, StyledRoot, Wrapper } from "./style";

export default function MainReport() {
  const [totalNumber, setTotalNumber] = useState(250);
  const [findNumber, setFindNumber] = useState(3500);
  const [requestNumber, setRequestNumber] = useState(99);

  const ReportNumber = async () => {
    const nowTotalNumber = await getLectureTotalNumber();
    const nowFindNumber = await getLectureFindNumber();
    const nowRequestNumber = await getLectureRequestNumber();

    nowTotalNumber && setTotalNumber(nowTotalNumber);
    nowFindNumber && setFindNumber(nowFindNumber);
    nowRequestNumber && setRequestNumber(nowRequestNumber);
  };

  // useEffect(() => {
  //   ReportNumber();
  // }, []);

  const TotalCompare = {
    UniqueIcon: TotalIcon,
    title: "총 비교 강의",
    count: totalNumber,
    unit: "개",
  };
  const CustomSearch = {
    UniqueIcon: FindIcon,
    title: "맞춤 강의 찾기",
    count: findNumber,
    unit: "회",
  };
  const RequestCompare = {
    UniqueIcon: RequestIcon,
    title: "비교 요청",
    count: requestNumber,
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
