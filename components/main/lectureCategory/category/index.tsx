import Link from "next/link";
import React from "react";

import { StyledRoot } from "./style";

interface Prop {
  children: string;
}

const Category = ({ children }: Prop) => {
  return (
    <StyledRoot>
      <Link href="/category">{children}</Link>
    </StyledRoot>
  );
};

export default Category;
