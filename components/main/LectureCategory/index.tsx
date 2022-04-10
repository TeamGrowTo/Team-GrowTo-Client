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

import Category from "./Category";
import { CategoryWrapper, StyledRoot } from "./style";

const iconList: StaticImageData[] = [
  MainLectureDevelopIcon,
  MainLecturePlanIcon,
  MainLectureDesignIcon,
  MainLectureMarketingIcon,
  MainLectureDataIcon,
  MainLectureEtcIcon,
];

interface Props {
  resetData: () => void;
}

function MainLectureCategory({ resetData }: Props) {
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  const setLectureCategory = async (): Promise<void> => {
    const result = await getLectureCategoryData();

    setCategoryList(result);
  };

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const result = categoryList?.filter((category) => category.id === id)[0] || null;

      setCurrentCategory(result);
      //분야 선택시 category페이지의 기존 skill 및 강의목록 데이터 삭제
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
              <div>
                <Image src={iconList[index]} alt="categoryIcon" quality={100} />
              </div>
              <span>{category.categoryName}</span>
            </>
          </Category>
        ))}
      </CategoryWrapper>
    </StyledRoot>
  );
}

export default MainLectureCategory;
