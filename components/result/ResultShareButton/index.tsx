import Modal from "components/common/Modal";
import { ResultShareIcon } from "public/assets/icons";
import React, { useState } from "react";

import { ShareButton, StyledRoot } from "./style";

const ResultShareButton = function () {
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
        mainText="강의 비교 결과 페이지 URL이 복사 되었어요"
        subText="모두에게 강의 비교 결과를 알려주세요."
      />
    </StyledRoot>
  );
};

export default ResultShareButton;
