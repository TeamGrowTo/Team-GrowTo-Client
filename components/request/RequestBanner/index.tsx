import React from "react";

import { StyledRoot, Wrapper } from "./style";

export default function RequestBanner() {
  return (
    <StyledRoot>
      <Wrapper>
        <div>
          여러분의 <p>비교요청으로</p>
        </div>
        <div>
          그로투는 <p>총 2,115개</p>의 강의를 비교해왔어요!
        </div>
      </Wrapper>
    </StyledRoot>
  );
}
