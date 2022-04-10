import { getLectureCategoryData } from "apis/info.api";
import { UseSorting } from "hooks/UseCategorySorting";
import {
  MainLectureDataIcon,
  MainLectureDesignIcon,
  MainLectureDevelopIcon,
  MainLectureEtcIcon,
  MainLectureMarketingIcon,
  MainLecturePlanIcon,
} from "public/assets/images";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { lectureCategoryState } from "store/state";
import { LectureCategoryData } from "types/info.type";

import CategoryList from "./CategoryList";
import { StyledRoot } from "./style";

const iconList: StaticImageData[] = [
  MainLectureDevelopIcon,
  MainLecturePlanIcon,
  MainLectureDesignIcon,
  MainLectureMarketingIcon,
  MainLectureDataIcon,
  MainLectureEtcIcon,
];

//server에서 들고온 데이터 가공 및 icon과 매핑 등 서버에서 가져온 데이터 관리는 여기서 수행함.
function MainLectureCategory() {
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const { filterCategory } = UseSorting();

  const categoryViewArr = ["개발", "기획", "디자인", "마케팅", "데이터", "기타"];

  const setLectureCategory = async () => {
    const result = await getLectureCategoryData();

    const filteredCategoryList = filterCategory(result, categoryViewArr);

    setCategoryList(filteredCategoryList);
  };

  useEffect(() => {
    setLectureCategory();
  }, []);

  return (
    <StyledRoot>
      <h3>내가 찾고 싶은 강의 분야는?</h3>
      <small>10초만에 내게 맞는 강의 찾기</small>
      <CategoryList categoryList={categoryList} iconList={iconList} />
    </StyledRoot>
  );
}

export default MainLectureCategory;
