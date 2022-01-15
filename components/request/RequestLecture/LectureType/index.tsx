import React from "react";

import { InputWrapper, LectureTypeBox } from "../LectureCategory/style";

export default function LectureType() {
  return (
    <>
      <LectureTypeBox>
        <p>강의 종류*</p>
        <InputWrapper>
          <input type="text" placeholder="강의 종류를 입력해주세요 (파이썬, 피그마, 블록체인 등)" />
        </InputWrapper>
      </LectureTypeBox>
    </>
  );
}
