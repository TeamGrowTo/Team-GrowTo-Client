import Link from "next/link";
import { useRouter } from "next/router";
import { LogoIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import { LogoWrapper, NavItem, NavItemBox, NavItemWrapper, StyledRoot } from "./style";

function LargeNavBar() {
  const router = useRouter();

  return (
    <StyledRoot>
      <NavItemBox>
        <Link href="/" passHref>
          <LogoWrapper>
            <LogoIcon />
          </LogoWrapper>
        </Link>
        <NavItemWrapper>
          <Link href="/category" passHref>
            <NavItem pathName={router.pathname}>전체강의</NavItem>
          </Link>
          <Link href="/choiceRequest" passHref>
            <NavItem pathName={router.pathname}>비교요청</NavItem>
          </Link>
          <Link href="/about" passHref>
            <NavItem pathName={router.pathname}>ABOUT</NavItem>
          </Link>
        </NavItemWrapper>
      </NavItemBox>
    </StyledRoot>
  );
}

export default LargeNavBar;
