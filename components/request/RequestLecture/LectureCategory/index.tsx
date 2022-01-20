import { Dropdown } from "public/assets/icons";
import React, { useState } from "react";

import {
  CategoryButton,
  CategoryList,
  CategoryWrapper,
  DropdownWrapper,
  LectureCategoryBox,
} from "./style";

interface SelectedProps {
  categorySelected: string;
  setCategorySelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function LectureCategory({ categorySelected, setCategorySelected }: SelectedProps) {
  // 버튼 눌렀을 때 dropdown 구현
  // a. 버튼이 눌렸을 때, 아이콘 변화, border-radius 변화, dropdown 오픈
  // b. dropdown 메뉴 클릭했을 때, btn 안의 값 변화, 글자 색 변화, dropdown 닫힘
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const handleMenu = (e: any) => {
    setCategorySelected(e.target.innerText);
    setOpen(false);
  };

  return (
    <>
      <LectureCategoryBox>
        <p>강의 분야*</p>
        <CategoryWrapper>
          <CategoryButton type="button" open={open} categorySelected={categorySelected}>
            {categorySelected == "" ? (
              <span>개발, 기획, 데이터, 디자인, 마케팅, 기타</span>
            ) : (
              <span>{categorySelected}</span>
            )}
            <DropdownWrapper onClick={handleDropdown}>
              <Dropdown />
            </DropdownWrapper>
          </CategoryButton>
          {open ? (
            <CategoryList onClick={handleMenu}>
              <li>개발</li>
              <li>기획</li>
              <li>데이터</li>
              <li>디자인</li>
              <li>마케팅</li>
              <li>기타</li>
            </CategoryList>
          ) : (
            <></>
          )}
        </CategoryWrapper>
      </LectureCategoryBox>
    </>
  );
}
