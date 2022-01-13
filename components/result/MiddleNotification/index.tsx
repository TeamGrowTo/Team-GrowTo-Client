import { NotiIcon } from "public/assets/icons";
import React from "react";

import { Content, NotiBox, NotiTitle, NotiWrapper, StyledRoot } from "./style";

const MiddleNotification = function () {
  return (
    <StyledRoot>
      <NotiBox>
        <NotiIcon />
        <NotiWrapper>
          <NotiTitle>해당 추천 내용에 광고가 포함되어 있나요?</NotiTitle>
          <Content>그로투 강의비교는 광고를 일체 받고 있지 않습니다. 그로투는 개인의 성장</Content>
        </NotiWrapper>
      </NotiBox>
    </StyledRoot>
  );
};

export default MiddleNotification;
