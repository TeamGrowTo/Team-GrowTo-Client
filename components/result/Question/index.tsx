import React, { useState } from "react";

import QuestionButton from "./QuestionButton";
import QuestionModal from "./QuestionModal";
import { BackGround } from "./style";

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
    <div>
      <QuestionButton onClickQuestionButton={openModal} />
      {flagModal ? (
        <>
          <BackGround onClick={closeModal}></BackGround>
          <QuestionModal onCloseModal={closeModal} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Question;
