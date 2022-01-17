import React, { useState } from "react";

import Email from "./Email";
import LectureCategory from "./LectureCategory";
import LectureType from "./LectureType";
import {
  ActiveRequestButton,
  DisabledRequestButton,
  RequestCard,
  StyledRoot,
  Title,
  Wrapper,
} from "./style";

export default function RequestLecture() {
  const [categorySelected, setCategorySelected] = useState("");
  const [typeFilled, setTypeFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);

  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>강의 비교 요청</h2>
          <p>이런 강의도 비교해주세요!</p>
        </Title>
        <RequestCard>
          <form>
            <LectureCategory
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
            <LectureType setTypeFilled={setTypeFilled} />
            <Email setEmailFilled={setEmailFilled} />
            {categorySelected !== "" && typeFilled === true && emailFilled === true ? (
              <ActiveRequestButton>
                <p>강의비교 요청하기</p>
              </ActiveRequestButton>
            ) : (
              <DisabledRequestButton>
                <p>강의비교 요청하기</p>
              </DisabledRequestButton>
            )}
          </form>
        </RequestCard>
      </Wrapper>
    </StyledRoot>
  );
}
