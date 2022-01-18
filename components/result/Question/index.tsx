import React, { useState } from "react";

import QuestionButton from "./QuestionButton";
import QuestionModal from "./QuestionModal";
import { BackGround, StyledRoot } from "./style";

function Question() {
  const [flagModal, setFlagModal] = useState(false);
  const handleModal = () => {
    setFlagModal(!flagModal);
  };

  return (
    <StyledRoot>
      <QuestionButton onClickQuestionButton={handleModal} />
      {flagModal ? (
        <>
          <BackGround onClick={handleModal} flagModal={flagModal}></BackGround>
          <QuestionModal onCloseModal={handleModal} />
        </>
      ) : (
        <></>
      )}
    </StyledRoot>
  );
}

export default Question;
