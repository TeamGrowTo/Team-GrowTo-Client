// import Modal from "components/common/Modal";
import React from "react";

import { Background, OurMission, ShareBox, Slogan, StyledRoot } from "./style";
function MainMission() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const shareUrl = async () => {
  //   try {
  //     await navigator.clipboard.writeText(
  //       "https://www.growto.kr/?utm_source=Growto&utm_medium=share&utm_campaign=share",
  //     );
  //     setIsModalOpen(true);
  //     document.body.style.overflow = "hidden";
  //   } catch {
  //     alert("복사 실패!");
  //   }
  // };

  return (
    <StyledRoot>
      <Background>
        <OurMission>OUR MISSION</OurMission>
        <ShareBox>
          <Slogan>
            <p>
              맛있는 음식과 좋은 옷 대신 <span>‘성장’</span>을 택한 사람들이 <br />더 쉽게 자신에게
              맞는 강의를 찾으면 좋겠어요
            </p>
          </Slogan>
          {/* <ButtonWrapper>
          <p>
            <span>그로투</span>가 필요한 친구에게
          </p>
          <ShareButton onClick={shareUrl}>공유하기</ShareButton>
        </ButtonWrapper> */}
        </ShareBox>
        {/* <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        mainText="공유 링크가 복사 되었어요 ☺️"
        subText="모두가 편하게 강의를 찾을 수 있도록 주변에 알려주세요."
      /> */}
      </Background>
    </StyledRoot>
  );
}

export default MainMission;
