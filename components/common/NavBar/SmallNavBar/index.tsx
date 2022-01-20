import Link from "next/link";
import { CloseButton, HamburgerIcon, SmallLogoIcon } from "public/assets/icons";
import React, { useState } from "react";

import { ButtonWrapper, NavMenuList, NavMenuListItem, StyledRoot } from "./style";

function SmallNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledRoot>
      <Link href="/" passHref>
        <ButtonWrapper>
          <SmallLogoIcon />
        </ButtonWrapper>
      </Link>
      {isOpen ? (
        <ButtonWrapper onClick={handleOpenMenu}>
          <CloseButton />
          {isOpen && (
            <NavMenuList>
              <NavMenuListItem>
                <Link href="/category">전체강의</Link>
              </NavMenuListItem>
              <NavMenuListItem>
                <Link href="/request">비교요청</Link>
              </NavMenuListItem>
              <NavMenuListItem>
                <Link href="https://lud2ns.notion.site/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161">
                  <a target="_blank">ABOUT</a>
                </Link>
              </NavMenuListItem>
            </NavMenuList>
          )}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper onClick={handleOpenMenu}>
          <HamburgerIcon />
        </ButtonWrapper>
      )}
    </StyledRoot>
  );
}

export default SmallNavBar;
