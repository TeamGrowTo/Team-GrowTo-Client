import Link from "next/link";
import { ICRightIcon, TenSecondIcon } from "public/assets/icons";
import React from "react";

import { Description, RedirectButton, StyledRoot } from "./style";

const RedirectProcessButton = function () {
  return (
    <StyledRoot>
      <Description>
        <TenSecondIcon />
        <span>단 10초면, 나에게 꼭 맞는 강의를 찾을 수 있어요.</span>
      </Description>
      <Link href="/processTag">
        <RedirectButton>
          맞춤 강의 찾기
          <ICRightIcon />
        </RedirectButton>
      </Link>
    </StyledRoot>
  );
};

export default RedirectProcessButton;
