import Link from "next/link";
import React from "react";

import { StyledRoot } from "./style";

interface Prop {
  children: JSX.Element | null;
  onCategoryClick: () => void;
}

function Category({ onCategoryClick, children }: Prop) {
  return <StyledRoot onClick={onCategoryClick}>{children}</StyledRoot>;
}

export default Category;
