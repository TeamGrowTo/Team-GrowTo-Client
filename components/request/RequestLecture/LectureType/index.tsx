import React from "react";

import { InputWrapper, LectureTypeBox } from "./style";

interface TypeFilledProps {
  setTypeFilled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LectureType({ setTypeFilled }: TypeFilledProps) {
  const handleInputValue = () => {
    setTypeFilled(true);
  };

  return (
    <>
      <LectureTypeBox>
        <p>강의 종류*</p>
        <InputWrapper>
          <input
            type="text"
            placeholder="강의 종류를 입력해주세요 (파이썬, 피그마, 블록체인 등)"
            onChange={handleInputValue}
            required
          />
        </InputWrapper>
      </LectureTypeBox>
    </>
  );
}
