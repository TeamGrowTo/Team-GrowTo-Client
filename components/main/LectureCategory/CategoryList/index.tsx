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

import Category from "../Category";
import { CategoryWrapper } from "./style";

interface Props {
  iconList: StaticImageData[];
}

function CategoryList({ iconList }: Props) {
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  const categoryList = useRecoilValue(lectureCategoryState);

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

  return (
    <CategoryWrapper>
      {categoryList?.map((category, index) => (
        <Category key={category.id} onCategoryClick={() => handleCategoryClick(category.id)}>
          <>
            <div>
              <Image src={iconList[index]} alt="categoryIcon" quality={100} />
            </div>
            <span>{category.categoryName}</span>
          </>
        </Category>
      ))}
    </CategoryWrapper>
  );
}

export default CategoryList;
