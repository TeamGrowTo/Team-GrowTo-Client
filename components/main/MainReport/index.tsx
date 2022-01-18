import {
  getLectureFindNumber,
  getLectureRequestNumber,
  getLectureTotalNumber,
} from "pages/apis/count.api";
import { ReportIcon } from "public/assets/icons";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { findNumberState, requestNumberState, totalNumberState } from "store/state";

import ReportSection from "./ReportSection";
import { Line, StyledRoot, Wrapper } from "./style";

export default function MainReport() {
  // 중복되는 부분을 어떻게하면 센스있게 api 연결 가능할까요
  const [totalNumber, setTotalNumber] = useRecoilState(totalNumberState);
  const [findNumber, setFindNumber] = useState("");
  const [requestNumber, setRequestNumber] = useState("");

  useEffect(async () => {
    setTotalNumber(await getLectureTotalNumber);
    setFindNumber(await getLectureFindNumber);
    setRequestNumber(await getLectureRequestNumber);
  }, []);

  const TotalCompare = {
    UniqueIcon: ReportIcon,
    title: "총 비교 강의",
    count: { totalNumber },
    unit: "개",
  };
  const CustomSearch = {
    UniqueIcon: ReportIcon,
    title: "맞춤 강의 찾기",
    count: { findNumber },
    unit: "회",
  };
  const RequestCompare = {
    UniqueIcon: ReportIcon,
    title: "비교 요청",
    count: { requestNumber },
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
