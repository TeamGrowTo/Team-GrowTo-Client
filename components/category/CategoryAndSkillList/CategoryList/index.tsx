import React from "react";

import { Category, StyledRoot } from "./style";

const dummy = [
  {
    id: 1,
    name: "개발",
  },
  {
    id: 2,
    name: "기획",
  },
  {
    id: 3,
    name: "데이터",
  },
  {
    id: 4,
    name: "디자인",
  },
  {
    id: 5,
    name: "마케팅",
  },
  {
    id: 6,
    name: "기타",
  },
];

interface Props {
  nowCategory: number;
  onCategoryClick: (id: number) => void;
}

const CategoryList = function ({ nowCategory, onCategoryClick }: Props) {
  return (
    <StyledRoot>
      {dummy.map((category) => (
        <Category
          key={category.id}
          isSelected={nowCategory === category.id}
          onClick={() => onCategoryClick(category.id)}
        >
          {category.name}
        </Category>
      ))}
    </StyledRoot>
  );
};

export default CategoryList;
