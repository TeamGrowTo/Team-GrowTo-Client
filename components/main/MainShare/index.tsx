import React from "react";
import Link from "next/link";
import { StyledRoot, Container, StoryLink, Slogan, Share, ShareButton } from "./style";
function MainShare() {
  return (
    <StyledRoot>
      <Container>
        <StoryLink>Growto 스토리 보러가기 &gt; </StoryLink>
        <Slogan>
          <p>
            맛있는 음식과 좋은 옷 대신 <span>‘성장’</span>을 택한 사람들이 <br />더 쉽게 자신에게
            맞는 강의를 찾으면 좋겠어요
          </p>
          <p>- 그로투 팀원 일동 -</p>
        </Slogan>
        <Share>
          <p>
            <span>그로투</span>가 필요한 친구에게
          </p>
          <ShareButton>공유하기</ShareButton>
        </Share>
      </Container>
    </StyledRoot>
  );
}

export default MainShare;
