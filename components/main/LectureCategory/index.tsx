import { getLectureCategoryData } from "apis/info.api";
import Image from "next/image";
import {
  MainLectureDataIcon,
  MainLectureDesignIcon,
  MainLectureDevelopIcon,
  MainLectureEtcIcon,
  MainLectureMarketingIcon,
  MainLecturePlanIcon,
} from "public/assets/images";
import React, { useEffect } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
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
import Screen from "styles/Screen";

import Category from "./Category";
import { CategoryWrapper, StyledRoot } from "./style";

const iconList: StaticImageData[] = [
  MainLectureDevelopIcon,
  MainLecturePlanIcon,
  MainLectureDataIcon,
  MainLectureDesignIcon,
  MainLectureMarketingIcon,
  MainLectureEtcIcon,
];

function MainLectureCategory() {
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
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

  const setLectureCategory = async (): Promise<void> => {
    const result = await getLectureCategoryData();

    setCategoryList(result);
  };

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const result = categoryList?.filter((category) => category.id === id)[0] || null;

      setCurrentCategory(result);
      resetData();
    }
  };

  useEffect(() => {
    setLectureCategory();
  }, []);

  return (
    <StyledRoot>
      <h3>내가 찾고 싶은 강의 분야는?</h3>
      <small>10초만에 내게 맞는 강의 찾기</small>
      <CategoryWrapper>
        {categoryList?.map((category, index) => (
          <Category key={category.id} onCategoryClick={() => handleCategoryClick(category.id)}>
            <>
              <Screen desktop>
                <Image src={iconList[index]} alt="categoryIcon" />
              </Screen>
              <Screen mobile>
                <Image src={iconList[index]} alt="categoryIcon" width="18" height="18" />
              </Screen>
              <span>{category.categoryName}</span>
            </>
          </Category>
        ))}
      </CategoryWrapper>
    </StyledRoot>
  );
}

export default MainLectureCategory;
