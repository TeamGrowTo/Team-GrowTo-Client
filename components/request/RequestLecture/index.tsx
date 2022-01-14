import React from "react";

import Email from "./Email";
import LectureCategory from "./LectureCategory";
import LectureType from "./LectureType";
import { RequestButton, RequestCard, StyledRoot, Title, Wrapper } from "./style";
export default function RequestLecture() {
  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>강의 비교 요청</h2>
          <p>이런 강의도 비교해주세요!</p>
        </Title>
        <RequestCard>
          <LectureCategory />
          <LectureType />
          <Email />
          <RequestButton>
            <p>강의비교 요청하기</p>
          </RequestButton>
        </RequestCard>
      </Wrapper>
    </StyledRoot>
  );
}
