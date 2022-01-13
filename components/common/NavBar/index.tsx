import Link from "next/link";
import { LogoIcon } from "public/assets/icons";
import React from "react";

import { LogoWrapper, NavItem, NavItemBox, NavItemWrapper, StyledRoot } from "./style";

function NavBar() {
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
            <NavItem>전체강의</NavItem>
          </Link>
          <Link href="/choiceRequest" passHref>
            <NavItem>비교요청</NavItem>
          </Link>
          <Link href="/about" passHref>
            <NavItem>ABOUT</NavItem>
          </Link>
        </NavItemWrapper>
      </NavItemBox>
    </StyledRoot>
  );
}

export default NavBar;