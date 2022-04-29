import Modal from "components/common/Modal";
import Image from "next/image";
import { GrowToLogoIcon } from "public/assets/icons";
import React, { useState } from "react";

import { ButtonWrapper, ShareBox, ShareButton, StyledRoot } from "./style";

function Share() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shareUrl = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://www.growto.kr/?utm_source=Growto&utm_medium=share&utm_campaign=share",
      );
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } catch {
      alert("복사 실패!");
    }
  };

  return (
    <StyledRoot>
      <ShareBox>
        <ButtonWrapper>
          <p>
            <span>
              <GrowToLogoIcon />
            </span>
            가 필요한 친구에게
          </p>
          <ShareButton onClick={shareUrl}>공유하기</ShareButton>
        </ButtonWrapper>
      </ShareBox>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        mainText="공유 링크가 복사 되었어요 ☺️"
        subText="모두가 편하게 강의를 찾을 수 있도록 주변에 알려주세요."
      />
    </StyledRoot>
  );
}

export default Share;
