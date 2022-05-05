import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, lectureCategoryState } from "store/state";

import CategoryButton from "../CategoryButton";
import { StyledRoot } from "./style";

interface Props {
  iconList: StaticImageData[];
  onCategoryClick: (id: number | null) => void;
}

function CategoryList({ iconList, onCategoryClick }: Props) {
  const currentCategory = useRecoilValue(currentCategoryState);
  const categoryList = useRecoilValue(lectureCategoryState);

  return (
    <StyledRoot>
      {categoryList?.map((category, index) => (
        <CategoryButton
          key={category.id}
          isSelected={currentCategory?.id === category.id}
          onCategoryClick={() => onCategoryClick(category.id)}
        >
          <>
            <div>
              <Image src={iconList[index]} alt="categoryIcon" quality={100} />
            </div>
            <span>{category.categoryName}</span>
          </>
        </CategoryButton>
      ))}
    </StyledRoot>
  );
}

export default CategoryList;
