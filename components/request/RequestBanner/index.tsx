import { getLectureTotalNumber } from "pages/apis/count.api";
import React, { useEffect, useState } from "react";

import { StyledRoot, Wrapper } from "./style";

export default function RequestBanner() {
  const [totalNumber, setTotalNumber] = useState(2115);
  //어떻게하면 단위에 2,115라고 붙여줄 수 있을까
  const TotalNumber = async () => {
    const nowTotalNumber = await getLectureTotalNumber();

    nowTotalNumber && setTotalNumber(nowTotalNumber);
  };

  useEffect(() => {
    TotalNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  return (
    <StyledRoot>
      <Wrapper>
        <div>
          여러분의 <p>&nbsp;비교요청으로</p>
        </div>
        <div>
          그로투는 <p>&nbsp;총 {totalNumber}개</p>의 강의를 비교해왔어요!
        </div>
      </Wrapper>
    </StyledRoot>
  );
}
