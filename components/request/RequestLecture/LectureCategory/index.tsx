import { Dropdown } from "public/assets/icons";
import React, { useState } from "react";

import {
  CategoryButton,
  CategoryList,
  CategoryWrapper,
  InputWrapper,
  LectureCategoryBox,
} from "./style";

export default function LectureCategory() {
  // 버튼 눌렀을 때 dropdown 구현
  // a. 버튼이 눌렸을 때, 아이콘 변화, border-radius 변화, dropdown 오픈
  // b. dropdown 메뉴 클릭했을 때, btn 안의 값 변화, btn 닫힘
  const [open, setOpen] = useState(false);

  const handleDropDown = () => {
    // if (open === false) setOpen(true);
    // else setOpen(false);
    setOpen(!open);
  };

  const handleMenu = () => {};

  return (
    <>
      <LectureCategoryBox>
        <p>강의 분야*</p>
        <CategoryWrapper>
          <CategoryButton>
            <span>개발, 기획, 데이터, 디자인, 마케팅, 기타</span>
            <span onClick={handleDropDown}>
              <Dropdown />
            </span>
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
