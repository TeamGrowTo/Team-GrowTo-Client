import Link from "next/link";
import { CloseButton, HamburgerIcon, SmallLogoIcon } from "public/assets/icons";
import React, { useState } from "react";
import { useResetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  lectureDataList,
  lectureSkillState,
} from "store/state";

import { ButtonWrapper, NavMenuList, NavMenuListItem, StyledRoot } from "./style";

function SmallNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetSkillData = useResetRecoilState(currentSkillState);
  const resetLectureSkillData = useResetRecoilState(lectureSkillState);
  const resetCategoryData = useResetRecoilState(currentCategoryState);

  const handleResetLectureData = () => {
    resetLectureListData();
    resetSkillData();
    resetCategoryData();
    resetLectureSkillData();
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
                <Link href="/category" passHref>
                  <button onClick={handleResetLectureData}>전체강의</button>
                </Link>
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
