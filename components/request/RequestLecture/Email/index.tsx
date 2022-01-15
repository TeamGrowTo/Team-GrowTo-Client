import React from "react";

import { EmailBox, InputWrapper } from "./style";

export default function Email() {
  return (
    <>
      <EmailBox>
        <p>이메일*</p>
        <InputWrapper>
          <input type="email" placeholder="비교 결과를 이메일로 보내드려요" />
        </InputWrapper>
      </EmailBox>
    </>
  );
}
