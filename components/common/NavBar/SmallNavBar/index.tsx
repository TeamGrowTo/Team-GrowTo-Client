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
        <SmallLogoIcon />
      </Link>
      {isOpen ? (
        <ButtonWrapper onClick={handleOpenMenu}>
          <HamburgerIcon />
        </ButtonWrapper>
      ) : (
        <ButtonWrapper onClick={handleOpenMenu}>
          <CloseButton />
        </ButtonWrapper>
      )}
      {isOpen && (
        <NavMenuList>
          <NavMenuListItem>전체강의</NavMenuListItem>
          <NavMenuListItem>비교요청</NavMenuListItem>
          <NavMenuListItem>ABOUT</NavMenuListItem>
        </NavMenuList>
      )}
    </StyledRoot>
  );
}

export default SmallNavBar;
