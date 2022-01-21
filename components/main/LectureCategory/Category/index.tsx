import Link from "next/link";
import React from "react";

import { Button } from "./style";

interface Prop {
  children: JSX.Element[] | null;
  onCategoryClick: () => void;
}

const Category = function ({ onCategoryClick, children }: Prop) {
  return (
    <Link href="/category">
      <Button onClick={onCategoryClick}>{children}</Button>
    </Link>
  );
};

export default Category;
