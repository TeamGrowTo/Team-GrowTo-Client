import {
  getLectureFindNumber,
  getLectureRequestNumber,
  getLectureTotalNumber,
} from "apis/count.api";
import ReportSection from "components/main/MainReport/ReportSection";
import { ReportLine } from "public/assets/icons";
import {
  FindIcon,
  FindIcon_mobile,
  RequestIcon,
  RequestIcon_mobile,
  TotalIcon,
  TotalIcon_mobile,
} from "public/assets/images";
import React, { useEffect, useState } from "react";

import { LineWrapper, StyledRoot, Wrapper } from "./style";

export default function MainReport() {
  const [totalNumber, setTotalNumber] = useState(82);
  const [findNumber, setFindNumber] = useState(77);
  const [requestNumber, setRequestNumber] = useState(74);

  const ReportNumber = async () => {
    const nowTotalNumber = await getLectureTotalNumber();
    const nowFindNumber = await getLectureFindNumber();
    const nowRequestNumber = await getLectureRequestNumber();

    nowTotalNumber && setTotalNumber(nowTotalNumber);
    nowFindNumber && setFindNumber(nowFindNumber);
    nowRequestNumber && setRequestNumber(nowRequestNumber);
  };

  useEffect(() => {
    ReportNumber();
  }, []);

  const TotalCompare = {
    Icon: TotalIcon,
    mobileIcon: TotalIcon_mobile,
    title: "총 비교 강의",
    count: totalNumber,
    unit: "개",
  };
  const CustomSearch = {
    Icon: FindIcon,
    mobileIcon: FindIcon_mobile,
    title: "맞춤 강의 찾기",
    count: findNumber,
    unit: "회",
  };
  const RequestCompare = {
    Icon: RequestIcon,
    mobileIcon: RequestIcon_mobile,
    title: "비교 요청",
    count: requestNumber,
    unit: "건",
  };

  return (
    <StyledRoot>
      <Wrapper>
        <ReportSection reportInfo={TotalCompare} />
        <LineWrapper>
          <ReportLine />
        </LineWrapper>
        <ReportSection reportInfo={CustomSearch} />
        <LineWrapper>
          <ReportLine />
        </LineWrapper>
        <ReportSection reportInfo={RequestCompare} />
      </Wrapper>
    </StyledRoot>
  );
}
