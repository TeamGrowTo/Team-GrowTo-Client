import Link from "next/link";
import React, { useState } from "react";
import { StyledRoot, ShareBox, StoryLink, Slogan, ButtonWrapper, ShareButton } from "./style";
import ShareModal from "components/main/ShareModal";

function Share() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shareUrl = async () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    try {
      await navigator.clipboard.writeText(`${el.value}`);
      setIsModalOpen(true);
    } catch {
      alert(`복사 실패!`);
    }
  };

  return (
    <StyledRoot>
      <ShareBox>
        <Link href="/">
          <StoryLink>Growto 스토리 보러가기 &gt; </StoryLink>
        </Link>
        <Slogan>
          <p>
            맛있는 음식과 좋은 옷 대신 <span>‘성장’</span>을 택한 사람들이 <br />더 쉽게 자신에게
            맞는 강의를 찾으면 좋겠어요
          </p>
          <p>- 그로투 팀원 일동 -</p>
        </Slogan>
        <ButtonWrapper>
          <p>
            <span>그로투</span>가 필요한 친구에게
          </p>
          <ShareButton onClick={shareUrl}>공유하기</ShareButton>
        </ButtonWrapper>
      </ShareBox>
      <ShareModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </StyledRoot>
  );
}

export default Share;
