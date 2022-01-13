import React from "react";
import { StyledRoot, BackGround, Wrapper } from "./style";
interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}
function ShareModal({ isModalOpen, setIsModalOpen }: IProps) {
  const handleClose = (): void => {
    setIsModalOpen(false);
  };
  return (
    isModalOpen && (
      <StyledRoot>
        <BackGround isBlur={true} onClick={handleClose}></BackGround>
        <Wrapper>
          <p>링크가 복사되었습니다!</p>
        </Wrapper>
      </StyledRoot>
    )
  );
}

export default ShareModal;
