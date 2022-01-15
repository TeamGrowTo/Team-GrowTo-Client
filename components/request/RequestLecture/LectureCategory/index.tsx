import React from "react";

import { InputWrapper, LectureCategoryBox } from "./style";

export default function LectureCategory() {
  return (
    <>
      <LectureCategoryBox>
        <p>강의 분야*</p>
        <InputWrapper>
          <input type="text" placeholder="개발, 기획, 데이터, 디자인, 마케팅, 기타" />
        </InputWrapper>
      </LectureCategoryBox>
    </>
  );
}
