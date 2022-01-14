import { QuestionIcon } from "public/assets/icons";
import React from "react";

import { StyledRoot } from "./style";

interface Props {
  onClickQuestionButton: () => void;
}

const QuestionButton = function ({ onClickQuestionButton }: Props) {
  return (
    <StyledRoot onClick={onClickQuestionButton}>
      <span>강의 정보가 다른가요?</span>
      <QuestionIcon />
    </StyledRoot>
  );
};

export default QuestionButton;
