import Link from "next/link";
import { ICRightIcon, ICRightSmallIcon, TenSecondIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import { Content, Description, RedirectButton, StyledRoot } from "./style";

const RedirectProcessButton = function () {
  return (
    <StyledRoot>
      <Content>
        <Description>
          <Screen desktop>
            <TenSecondIcon />
          </Screen>
          <span>단 10초면, 나에게 꼭 맞는 강의를 찾을 수 있어요.</span>
        </Description>
        <Link href="/processTag" passHref>
          <RedirectButton>
            <div>
              <span>맞춤 강의 찾기</span>
              <Screen desktop>
                <ICRightIcon />
              </Screen>
              <Screen mobile>
                <ICRightSmallIcon />
              </Screen>
            </div>
          </RedirectButton>
        </Link>
      </Content>
    </StyledRoot>
  );
};

export default RedirectProcessButton;
