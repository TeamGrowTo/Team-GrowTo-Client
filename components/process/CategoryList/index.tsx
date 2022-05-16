import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, lectureCategoryState } from "store/state";
import Screen from "styles/Screen";

import CategoryButton from "../CategoryButton";
import { ImageWrapper, StyledRoot } from "./style";

interface Props {
  iconList: StaticImageData[];
  onCategoryClick: (id: number | null) => void;
  isClicked: boolean;
}

function CategoryList({ iconList, onCategoryClick, isClicked }: Props) {
  const currentCategory = useRecoilValue(currentCategoryState);
  const categoryList = useRecoilValue(lectureCategoryState);

  return (
    <StyledRoot>
      {categoryList?.map((category, index) => (
        <CategoryButton
          key={category.id}
          isSelected={currentCategory?.id === category.id}
          isClicked={isClicked}
          onCategoryClick={() => onCategoryClick(category.id)}
        >
          <>
            <ImageWrapper>
              <Image src={iconList[index]} alt="categoryIcon" quality={100} />
            </ImageWrapper>
            {/* <Screen mobile>
              <ImageWrapper>
                <Image src={iconList[index]} alt="categoryIcon" quality={100} />
              </ImageWrapper>
            </Screen> */}
            <span>{category.categoryName}</span>
          </>
        </CategoryButton>
      ))}
    </StyledRoot>
  );
}

export default CategoryList;
