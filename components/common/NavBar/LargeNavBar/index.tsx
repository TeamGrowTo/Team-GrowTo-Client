import Link from "next/link";
import { useRouter } from "next/router";
import { LogoIcon } from "public/assets/icons";
import React from "react";
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

import { LogoWrapper, NavItem, NavItemBox, NavItemWrapper, StyledRoot } from "./style";

function LargeNavBar() {
  const router = useRouter();
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

  const handleResetProcessData = () => {
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
      <NavItemBox>
        <Link href="/" passHref>
          <LogoWrapper onClick={handleResetProcessData}>
            <LogoIcon />
          </LogoWrapper>
        </Link>
        <NavItemWrapper>
          <Link href="/category" passHref>
            <NavItem onClick={handleResetLectureData} pathName={router.pathname} href="/category">
              전체강의
            </NavItem>
          </Link>
          <Link href="/request" passHref>
            <NavItem pathName={router.pathname} href="/request">
              비교요청
            </NavItem>
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKYVx60U_JMVBjJPgmCLS6CbcN1WaVuiMZ3Fi2YN6VCA5W-Q/viewform"
            passHref
          >
            <NavItem
              target="_blank"
              pathName={router.pathname}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKYVx60U_JMVBjJPgmCLS6CbcN1WaVuiMZ3Fi2YN6VCA5W-Q/viewform"
            >
              후기작성
            </NavItem>
          </Link>
          <Link
            href="https://lud2ns.notion.site/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
            passHref
          >
            <NavItem
              target="_blank"
              pathName={router.pathname}
              href="https://lud2ns.notion.site/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
            >
              ABOUT
            </NavItem>
          </Link>
        </NavItemWrapper>
      </NavItemBox>
    </StyledRoot>
  );
}

export default LargeNavBar;
