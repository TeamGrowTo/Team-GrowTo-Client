import Link from "next/link";
import { useRouter } from "next/router";
import { ICRightIcon, TenSecondIcon } from "public/assets/icons";
import React from "react";

import { Description, RedirectButton, StyledRoot } from "./style";

interface Props {
  nowCategory: number;
  nowSkill: number;
}

const RedirectProcessButton = function ({ nowCategory, nowSkill }: Props) {
  const router = useRouter();

  return (
    <StyledRoot>
      <Description>
        <TenSecondIcon />
        <span>단 10초면, 나에게 꼭 맞는 강의를 찾을 수 있어요.</span>
      </Description>
      <Link href={`/process/${nowCategory}/${nowSkill}`} as="/process">
        <RedirectButton>
          맞춤 강의 찾기
          <ICRightIcon />
        </RedirectButton>
      </Link>
    </StyledRoot>
  );
};

export default RedirectProcessButton;
