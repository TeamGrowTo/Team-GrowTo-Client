import Image from "next/image";
import React from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureDataList,
} from "store/state";
import { LectureCategoryData } from "types/info.type";

import Category from "../Category";
import { CategoryWrapper } from "./style";

interface Props {
  categoryList: LectureCategoryData[] | null;
  iconList: StaticImageData[];
}

function CategoryList({ categoryList, iconList }: Props) {
  const setCurrentCategory = useSetRecoilState(currentCategoryState);

  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetIsSelected = useResetRecoilState(isSelectedState);
  const resetSkillData = useResetRecoilState(currentSkillState);

  //분야 선택시 category페이지의 기존 skill 및 강의목록 데이터 삭제
  const resetData = () => {
    resetSkillData();
    resetLectureListData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
    resetIsSelected();
  };

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const findCurrentCategory = categoryList?.filter((category) => category.id === id)[0] || null;

      setCurrentCategory(findCurrentCategory);
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
