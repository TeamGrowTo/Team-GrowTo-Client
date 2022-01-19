import React from "react";

import { BackGround, Wrapper } from "./style";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  mainText: string;
  subText: string;
}
function Modal({ isModalOpen, setIsModalOpen, mainText, subText }: IProps) {
  const handleClose = (): void => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return isModalOpen ? (
    <>
      <BackGround isBlur={true} onClick={handleClose}></BackGround>
      <Wrapper>
        <p>{mainText}</p>
        <p>{subText}</p>
        <button onClick={handleClose}> 확인</button>
      </Wrapper>
    </>
  ) : (
    <></>
  );
}

export default Modal;
