import { NotiIcon } from "public/assets/icons";
import React from "react";

import { Content, NotiBox, NotiTitle, NotiWrapper, StyledRoot } from "./style";

const MiddleNotification = function () {
  return (
    <StyledRoot>
      <NotiBox>
        <span>
          <NotiIcon />
        </span>
        <NotiWrapper>
          <NotiTitle>
            <span>Q</span> 해당 추천 내용에 광고가 포함되어 있나요?
          </NotiTitle>
          <Content>
            <span>A</span> 그로투 강의비교는 광고를 일체 받고 있지 않습니다. 그로투는 오로지
            여러분의 성장만을 생각하는 서비스입니다.
          </Content>
        </NotiWrapper>
      </NotiBox>
    </StyledRoot>
  );
};

export default MiddleNotification;
