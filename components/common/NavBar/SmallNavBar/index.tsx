import Link from "next/link";
import { CloseButton, HamburgerIcon, SmallLogoIcon } from "public/assets/icons";
import React, { useState } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
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
  const resetIsSelected = useResetRecoilState(isSelectedState);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetProcessData = useSetRecoilState(processState);

  const handleResetLectureData = () => {
    resetLectureListData();
    resetSkillData();
    resetCategoryData();
    resetLectureSkillData();
    resetIsDisable();
    resetIsSelected();
    resetCurrentSorting();
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
                  <LinkA onClick={handleResetLectureData}>전체강의</LinkA>
                </Link>
              </NavMenuListItem>
              <NavMenuListItem>
                <Link href="/request">비교요청</Link>
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
