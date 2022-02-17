import { Dropdown, Dropdown_mobile } from "public/assets/icons";
import React, { useState } from "react";
import Screen from "styles/Screen";

import {
  CategoryBox,
  CategoryButton,
  CategoryList,
  CategoryListItem,
  CategoryListWrapper,
  DropdownWrapper,
  LectureCategoryContainer,
} from "./style";

interface SelectedProps {
  categorySelected: string;
  setCategorySelected: (test: string) => void;
}

export default function LectureCategory({ categorySelected, setCategorySelected }: SelectedProps) {
  // 버튼 눌렀을 때 dropdown 구현
  // a. 버튼이 눌렸을 때, 아이콘 변화, border-radius 변화, dropdown 오픈
  // b. dropdown 메뉴 클릭했을 때, btn 안의 값 변화, 글자 색 변화, dropdown 닫힘
  const lectureList = ["개발", "기획", "데이터", "디자인", "마케팅", "기타"];
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const handleMenu = (list: string) => {
    // if (!(e.target instanceof HTMLUListElement)) return;
    setCategorySelected(list);
    setOpen(false);
  };

  return (
    <>
      <LectureCategoryContainer>
        <p>강의 분야*</p>
        <CategoryBox>
          <CategoryButton
            type="button"
            open={open}
            categorySelected={categorySelected}
            onClick={handleDropdown}
          >
            {categorySelected == "" ? (
              <span>개발, 기획, 데이터, 디자인, 마케팅, 기타</span>
            ) : (
              <span>{categorySelected}</span>
            )}
            <DropdownWrapper open={open} categorySelected={categorySelected}>
              <Screen desktop>
                <Dropdown />
              </Screen>
              <Screen mobile>
                <Dropdown_mobile />
              </Screen>
            </DropdownWrapper>
          </CategoryButton>
          {open ? (
            <CategoryList>
              {lectureList.map((list, index) => {
                const handleOnClick = () => {
                  handleMenu(list);
                };

                return (
                  <CategoryListWrapper key={index} onClick={handleOnClick}>
                    <CategoryListItem>{list}</CategoryListItem>
                  </CategoryListWrapper>
                );
              })}
            </CategoryList>
          ) : (
            <></>
          )}
        </CategoryBox>
      </LectureCategoryContainer>
    </>
  );
}
