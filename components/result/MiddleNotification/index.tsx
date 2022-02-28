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
            <span>Q</span> 맞춤 강의 찾기에 광고가 포함되어있나요?
          </NotiTitle>
          <Content>
            <span>A</span> 아니요! 그로투는 우리가 함께 {"'성장'"}하기 위해 만든 서비스, 광고를 받지
            않아요
          </Content>
        </NotiWrapper>
      </NotiBox>
    </StyledRoot>
  );
};

export default MiddleNotification;
