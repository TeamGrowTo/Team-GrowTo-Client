import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from 'public/assets/icons';
import Link from 'next/link';

function Navbar() {
  return (
    <StyledRoot>
      <NavItemBox>
        <div>
          <LogoIcon />
        </div>
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

export default Navbar;

const StyledRoot = styled.nav`
  width: 100%;
  height: 11.6rem;
  padding: 0 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  background-color: white;
  `;

const NavItemBox = styled.div`
  width: 100%;
  max-width: 128rem;
  display: flex;
`;

const NavItemWrapper = styled.div`
  margin-left: 10.4rem;
  display: flex;
  align-items: center;
  min-width: 48rem;
`;

const NavItem = styled.a`
  margin: 0 22px;

  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  letter-spacing: -0.05em;
  color: #606060;
  `;
