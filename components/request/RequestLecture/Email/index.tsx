import React from "react";

import { EmailBox, InputWrapper } from "./style";
interface EmailFilledProps {
  setEmailFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: (email: string) => void;
}

export default function Email({ setEmailFilled, setEmail }: EmailFilledProps) {
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFilled(true);
    setEmail(e.target.value);
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
