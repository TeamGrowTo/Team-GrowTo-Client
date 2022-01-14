import React, { useState } from "react";

import QuestionButton from "./QuestionButton";
import QuestionModal from "./QuestionModal";
import { StyledRoot } from "./style";

const Question = function () {
  const [flagModal, setFlagModal] = useState(false);
  const handleModal = () => {
    setFlagModal(!flagModal);
  };

  return (
    <StyledRoot>
      <QuestionButton onClickQuestionButton={handleModal} />
      {flagModal ? <QuestionModal /> : <></>}
    </StyledRoot>
  );
};

export default Question;
