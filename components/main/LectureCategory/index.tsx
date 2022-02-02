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
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentCategoryState, lectureCategoryState } from "store/state";
import Screen from "styles/Screen";
import { LectureCategoryData } from "types/info.type";

import Category from "./Category";
import { CategoryWrapper, StyledRoot } from "./style";

const dummy: LectureCategoryData[] = [
  { id: 1, categoryName: "개발" },
  { id: 2, categoryName: "기획" },
  { id: 3, categoryName: "데이터" },
  { id: 4, categoryName: "디자인" },
  { id: 5, categoryName: "마케팅" },
  { id: 6, categoryName: "기타" },
];

const iconList: StaticImageData[] = [
  MainLectureDevelopIcon,
  MainLecturePlanIcon,
  MainLectureDataIcon,
  MainLectureDesignIcon,
  MainLectureMarketingIcon,
  MainLectureEtcIcon,
];

const MainLectureCategory = function () {
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const setCurrentCategory = useSetRecoilState(currentCategoryState);

  const setLectureCategory = async (): Promise<void> => {
    const result = await getLectureCategoryData();

    setCategoryList(result);
  };

  useEffect(() => {
    setLectureCategory();
    // setCategoryList(dummy);
    setCurrentCategory({ id: -1, categoryName: "" });
  }, []);

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const result = categoryList?.filter((category) => category.id === id)[0] || null;

      setCurrentCategory(result);
    }
  };

  return (
    <StyledRoot>
      <h3>내가 찾고 싶은 강의 분야는?</h3>
      <small>10초면 내게 맞는 강의를 찾을 수 있어요.</small>
      <CategoryWrapper>
        {categoryList?.map((category, index) => (
          <Category key={category.id} onCategoryClick={() => handleCategoryClick(category.id)}>
            <>
              <Screen desktop>
                <Image src={iconList[index]} alt="categoryIcon" width="30" height="32" />
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
};

export default MainLectureCategory;
