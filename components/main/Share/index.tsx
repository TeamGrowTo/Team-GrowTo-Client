// import Modal from "components/common/Modal";
import React from "react";

import { Background, OurMission, Slogan, SloganBox, StyledRoot } from "./style";
function MainMission() {
  return (
    <StyledRoot>
      <Background>
        <OurMission>OUR MISSION</OurMission>
        <SloganBox>
          <Slogan>
            <p>
              맛있는 음식과 좋은 옷 대신 <span>‘성장’</span>을 택한 사람들이 <br />더 쉽게 자신에게
              맞는 강의를 찾으면 좋겠어요
            </p>
          </Slogan>
        </SloganBox>
      </Background>
    </StyledRoot>
  );
}

export default MainMission;
