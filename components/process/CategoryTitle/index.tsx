import React from "react";

import { CategoryChoiceTitle, StyledRoot } from "./style";
function CategoryTitle() {
  return (
    <StyledRoot>
      <CategoryChoiceTitle>
        <p>
          맞춤 강의 찾고 싶은 <span>강의 분야</span>를 선택하세요
        </p>
      </CategoryChoiceTitle>
    </StyledRoot>
  );
}

export default CategoryTitle;
