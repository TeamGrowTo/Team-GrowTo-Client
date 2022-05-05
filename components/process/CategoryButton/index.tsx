import React from "react";

import { StyledRoot } from "./style";

interface Prop {
  children: JSX.Element | null;
  onCategoryClick: () => void;
  isSelected: boolean;
}

function Category({ onCategoryClick, children, isSelected }: Prop) {
  console.log(isSelected);

  return (
    <StyledRoot onClick={onCategoryClick} isSelected={isSelected}>
      {children}
    </StyledRoot>
  );
}

export default Category;
