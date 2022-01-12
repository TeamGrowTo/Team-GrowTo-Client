import React from 'react';
import { LogoIcon } from 'public/assets/icons';
import Link from 'next/link';
import { StyledRoot, LogoWrapper, NavItem, NavItemBox, NavItemWrapper } from "./style";

function NavBar() {
  return (
    <StyledRoot>
      <NavItemBox>
        <Link href="/">
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
  )
}

export default NavBar;