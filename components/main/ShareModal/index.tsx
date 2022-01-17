import React from "react";

import { BackGround, Wrapper } from "./style";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}
function ShareModal({ isModalOpen, setIsModalOpen }: IProps) {
  const handleClose = (): void => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return isModalOpen ? (
    <>
      <BackGround isBlur={true} onClick={handleClose}></BackGround>
      <Wrapper>
        <p>공유 링크가 복사 되었어요 ☺️</p>
        <p>모두가 편하게 강의를 찾을 수 있도록 주변에 알려주세요.</p>
        <button onClick={handleClose}> 확인</button>
      </Wrapper>
    </>
  ) : (
    <></>
  );
}

export default ShareModal;
