import React from "react";

import { StyledRoot, SubInfoUnit } from "./style";
type Answer = "Fast" | "Middle" | "Slow";
interface Props {
  replay: boolean;
  answer: Answer;
}

const SubInfo = function ({ replay, answer }: Props) {
  return (
    <StyledRoot>
      <SubInfoUnit>
        반복시청 <span>{replay ? "가능" : "불가능"}</span>
      </SubInfoUnit>
      <span> | </span>
      <SubInfoUnit>
        질문답변 <span>{answer ? "가능" : "불가능"}</span>
      </SubInfoUnit>
    </StyledRoot>
  );
};

export default SubInfo;
