import React, { useState } from "react";

import QuestionButton from "./QuestionButton";
import QuestionModal from "./QuestionModal";
import { BackGround, StyledRoot } from "./style";

function Question() {
  const [flagModal, setFlagModal] = useState(false);
  const openModal = () => {
    setFlagModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setFlagModal(false);
    document.body.style.overflow = "visible";
  };

  return (
    <StyledRoot>
      <QuestionButton onClickQuestionButton={openModal} />
      {flagModal ? (
        <>
          <BackGround onClick={closeModal}></BackGround>
          <QuestionModal onCloseModal={closeModal} />
        </>
      ) : (
        <></>
      )}
    </StyledRoot>
  );
}

export default Question;
