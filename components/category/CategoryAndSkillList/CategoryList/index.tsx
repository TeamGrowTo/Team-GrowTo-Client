import React from "react";
import { useRecoilValue } from "recoil";
import { lectureCategoryState } from "store/state";
import { LectureCategoryData } from "types/info.type";

import { Category, StyledRoot } from "./style";

interface Props {
  nowCategory: number;
  onCategoryClick: (id: number | null) => void;
}

const CategoryList = function ({ nowCategory, onCategoryClick }: Props) {
  const categoryList = useRecoilValue(lectureCategoryState);

  return (
    <StyledRoot>
      {categoryList?.map((category: LectureCategoryData) => (
        <Category
          key={category.id}
          isSelected={nowCategory === category.id}
          onClick={() => onCategoryClick(category.id)}
        >
          {category.categoryName}
        </Category>
      ))}
    </StyledRoot>
  );
};

export default CategoryList;
