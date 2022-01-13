// import { getLectureCategoryData } from "pages/apis/info.api";
// import React, { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { lectureCategoryState } from "store/state";

import Category from "./category";
import { CategoryWrapper, StyledRoot } from "./style";

const dummy = [
  { id: 1, name: "개발" },
  { id: 2, name: "기획" },
  { id: 3, name: "데이터" },
  { id: 4, name: "디자인" },
  { id: 5, name: "마케팅" },
  { id: 6, name: "기타" },
];

const MainLectureCategory = () => {
  // const [category, setCategory] = useRecoilState(lectureCategoryState);

  // useEffect(() => {
  //   setCategory(getLectureCategoryData);
  // }, []);

  return (
    <StyledRoot>
      <h3>내가 찾고 싶은 강의 분야는?</h3>
      <small>10초면 내게 맞는 강의를 찾을 수 있어요.</small>
      <CategoryWrapper>
        {dummy.map((category) => (
          <Category key={category.id}>{category.name}</Category>
        ))}
      </CategoryWrapper>
    </StyledRoot>
  );
};

export default MainLectureCategory;
