import Modal from "components/common/Modal";
import { ResultShareIcon } from "public/assets/icons";
import React, { useState } from "react";

import { ShareButton, StyledRoot } from "./style";

function ResultShareButton() {
  const [flagModal, setFlagModal] = useState(false);

  const copyLinkToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
    } catch {
      throw new Error("복사 실패!");
    }
  };

  const openModal = () => {
    setFlagModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleClick = () => {
    copyLinkToClipBoard();
    openModal();
  };

  return (
    <StyledRoot>
      <ShareButton onClick={handleClick}>
        <ResultShareIcon />
        <span>맞춤 강의 결과 저장하기</span>
      </ShareButton>
      <Modal
        isModalOpen={flagModal}
        setIsModalOpen={setFlagModal}
        mainText="맞춤 강의 결과 페이지 URL이 복사 되었어요"
        subText="그로투가 '성장'하는 당신을 응원해요!"
      />
    </StyledRoot>
  );
}

export default ResultShareButton;
