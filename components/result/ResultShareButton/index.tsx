import { useRouter } from "next/router";
import { ResultShareIcon } from "public/assets/icons";
import React from "react";
import { ShareButton, StyledRoot } from "./style";

const ResultShareButton = function () {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(router.pathname);
    } catch {
      throw new Error("복사 실패!");
    }
  };

  return (
    <StyledRoot>
      <ShareButton onClick={handleClick}>
        <ResultShareIcon />
        <span>공유하기</span>
      </ShareButton>
    </StyledRoot>
  );
};

export default ResultShareButton;
