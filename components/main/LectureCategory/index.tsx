import { getLectureCategoryData } from "pages/apis/info.api";
import {
  MainLectureDataIcon,
  MainLectureDesignIcon,
  MainLectureDeveloperIcon,
  MainLectureEtcIcon,
  MainLectureMarketingIcon,
  MainLecturePlanIcon,
} from "public/assets/icons";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentCategoryState, lectureCategoryState } from "store/state";
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

const svgList: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] = [
  MainLectureDeveloperIcon,
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
        {categoryList?.map((category) => (
          <Category key={category.id} onCategoryClick={() => handleCategoryClick(category.id)}>
            <MainLectureDeveloperIcon />
            <span>{category.categoryName}</span>
          </Category>
        ))}
      </CategoryWrapper>
    </StyledRoot>
  );
};

export default MainLectureCategory;
