import { ReportLine } from "public/assets/icons";
import ReportIcon from "public/assets/icons/reportIcon.svg";
import React from "react";

import ReportSection from "./ReportSection";
import { StyledRoot, Wrapper } from "./style";

export default function MainReport() {
  // 중복되는 부분을 어떻게하면 센스있게 api 연결 가능할까요
  // const [totalNumber, setTotalNumber] = useState(0);
  // const [findNumber, setFindNumber] = useState(1);
  // const [requestNumber, setRequestNumber] = useState(2);

  // useEffect(async () => {
  //   setTotalNumber(await getLectureTotalNumber);
  //   setFindNumber(await getLectureFindNumber);
  //   setRequestNumber(await getLectureRequestNumber);
  // }, []);

  const TotalCompare = {
    Icon: ReportIcon,
    title: "총 비교 강의",
    count: 99,
    unit: "개",
  };
  const CustomSearch = {
    Icon: ReportIcon,
    title: "맞춤 강의 찾기",
    count: 55,
    unit: "회",
  };
  const RequestCompare = {
    Icon: ReportIcon,
    title: "비교 요청",
    count: 44,
    unit: "건",
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
