import React from "react";

import { EmailBox, InputWrapper } from "./style";
interface EmailFilledProps {
  setEmailFilled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Email({ setEmailFilled }: EmailFilledProps) {
  const handleInputValue = () => {
    setEmailFilled(true);
  };

  return (
    <>
      <EmailBox>
        <p>이메일*</p>
        <InputWrapper>
          <input
            type="email"
            placeholder="비교 결과를 이메일로 보내드려요"
            onChange={handleInputValue}
            required
          />
        </InputWrapper>
      </EmailBox>
    </>
  );
}
