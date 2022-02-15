import Link from "next/link";
import { CloseButton, HamburgerIcon, SmallLogoIcon } from "public/assets/icons";
import React, { useState } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureDataList,
  lectureSkillState,
  processState,
} from "store/state";

import { ButtonWrapper, LinkA, NavMenuList, NavMenuListItem, StyledRoot } from "./style";

function SmallNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetSkillData = useResetRecoilState(currentSkillState);
  const resetLectureSkillData = useResetRecoilState(lectureSkillState);
  const resetCategoryData = useResetRecoilState(currentCategoryState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetProcessData = useSetRecoilState(processState);
  const resetIsSelected = useResetRecoilState(isSelectedState);

  const handleResetLectureData = () => {
    resetLectureListData();
    resetSkillData();
    resetCategoryData();
    resetLectureSkillData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
    resetIsSelected();
    resetProcessData({
      category: "",
      skill: "",
      tags: [""],
      timeAsc: undefined,
      priceAsc: undefined,
    });
  };

  return (
    <StyledRoot>
      <Link href="/" passHref>
        <ButtonWrapper onClick={handleResetLectureData}>
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
                  <LinkA onClick={handleResetLectureData}>전체강의</LinkA>
                </Link>
              </NavMenuListItem>
              <NavMenuListItem>
                <Link href="/request">
                  <LinkA>비교요청</LinkA>
                </Link>
              </NavMenuListItem>
              <NavMenuListItem>
                <Link
                  href="https://lud2ns.notion.site/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
                  passHref
                >
                  <LinkA target="_blank">ABOUT</LinkA>
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
