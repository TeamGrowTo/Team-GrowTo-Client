import React from "react";

import { StyledRoot } from "./style";

interface Prop {
  children: JSX.Element | null;
  onCategoryClick: () => void;
  isSelected: boolean;
  isClicked: boolean;
}

function Category({ onCategoryClick, children, isSelected, isClicked }: Prop) {
  return (
    <StyledRoot onClick={onCategoryClick} isSelected={isSelected} isClicked={isClicked}>
      {children}
    </StyledRoot>
  );
}

export default Category;
