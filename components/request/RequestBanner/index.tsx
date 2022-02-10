import { getLectureTotalNumber } from "apis/count.api";
import React, { useEffect, useState } from "react";
import Screen from "styles/Screen";

import { StyledRoot, Wrapper } from "./style";

export default function RequestBanner() {
  const [totalNumber, setTotalNumber] = useState(82);

  //어떻게하면 단위에 2,115라고 붙여줄 수 있을까
  const TotalNumber = async () => {
    const nowTotalNumber = await getLectureTotalNumber();

    nowTotalNumber && setTotalNumber(nowTotalNumber);
  };

  useEffect(() => {
    TotalNumber();
  }, []);

  return (
    <StyledRoot>
      <Wrapper>
        <p>
          <div>
            여러분의 <strong>&nbsp;비교요청으로</strong>
          </div>
        </p>
        <p>
          <div>
            그로투는
            <strong>&nbsp;총 {totalNumber}개</strong>의&nbsp;
          </div>
          <div>강의를 비교해왔어요!</div>
        </p>
      </Wrapper>
    </StyledRoot>
  );
}
