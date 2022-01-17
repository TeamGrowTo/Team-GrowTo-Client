import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState } from "store/state";

interface CurrentCategory {
  id: number | null;
  categoryName: string | null;
}

const Category = function () {
  const currentCategory = useRecoilValue(currentCategoryState);

  return <div>category</div>;
};

export default Category;
