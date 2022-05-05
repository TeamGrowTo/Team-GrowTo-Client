import Image from "next/image";
import React from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureCategoryState,
  lectureDataList,
} from "store/state";

import CategoryButton from "../CategoryButton";
import { StyledRoot } from "./style";

interface Props {
  iconList: StaticImageData[];
  onCategoryClick: (id: number | null) => void;
}

function CategoryList({ iconList, onCategoryClick }: Props) {
  const currentCategory = useRecoilValue(currentCategoryState);
  const categoryList = useRecoilValue(lectureCategoryState);
  /*
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetCurrentSkillData = useResetRecoilState(currentSkillState);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetIsSelected = useResetRecoilState(isSelectedState);

  //분야 선택시 category페이지의 기존 skill 및 강의목록 데이터 삭제
  const resetData = () => {
    resetCurrentSkillData();
    resetLectureListData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
    resetIsSelected();
  };

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const findCurrentCategory = categoryList?.find((category) => category.id === id);

      findCurrentCategory && setCurrentCategory(findCurrentCategory);
      resetData();
    }
  };
*/

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
