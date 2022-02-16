import { QuestionIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import { StyledRoot } from "./style";

interface Props {
  onClickQuestionButton: () => void;
}

function QuestionButton({ onClickQuestionButton }: Props) {
  return (
    <StyledRoot onClick={onClickQuestionButton}>
      <Screen desktop>
        <>
          <span>강의 정보가 다른가요?</span>
          <QuestionIcon />
        </>
      </Screen>
      <Screen mobile>
        <QuestionIcon />
      </Screen>
    </StyledRoot>
  );
}

export default QuestionButton;
