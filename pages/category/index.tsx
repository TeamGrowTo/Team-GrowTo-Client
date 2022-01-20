import CategoryAndSkillList from "components/category/CategoryAndSkillList";
import RedirectProcessButton from "components/category/RedirectProcessButton";
import Result from "components/category/Result";
import {
  getLectureCategoryData,
  getLectureDataList,
  getLectureSkillData,
} from "pages/apis/info.api";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  isDisableState,
  lectureCategoryState,
  lectureDataList,
  lectureSkillState,
} from "store/state";
import { LectureCategoryData, LectureSkillData } from "types/info.type";

import { Background } from "./style";

const dummyCategoryList: LectureCategoryData[] = [
  {
    id: 1,
    categoryName: "개발",
  },
  {
    id: 2,
    categoryName: "기획",
  },
  {
    id: 3,
    categoryName: "데이터",
  },
  {
    id: 4,
    categoryName: "디자인",
  },
  {
    id: 5,
    categoryName: "마케팅",
  },
  {
    id: 6,
    categoryName: "기타",
  },
];

const dummySkillList: LectureSkillData[] = [
  {
    id: 1,
    skillName: "퍼포먼스&디지털",
  },
  {
    id: 2,
    skillName: "컨텐츠",
  },
  {
    id: 3,
    skillName: "FB&IG",
  },
  {
    id: 4,
    skillName: "GA&GA4",
  },
  {
    id: 5,
    skillName: "검색(SEO, SEM)",
  },
  {
    id: 6,
    skillName: "데이터분석 Python",
  },
  {
    id: 7,
    skillName: "퍼포먼스&디지털",
  },
  {
    id: 8,
    skillName: "퍼포먼스&디지털",
  },
  {
    id: 9,
    skillName: "퍼포먼스&디지털",
  },

  {
    id: 10,
    skillName: "퍼포먼스&디지털",
  },
  {
    id: 11,
    skillName: "컨텐츠",
  },
  {
    id: 12,
    skillName: "데이터분석 Python",
  },
];

function Category() {
  const [category, setCurrentCategory] = useRecoilState(currentCategoryState);
  const [currentSkill, setCurrentSkill] = useRecoilState(currentSkillState);
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const [skillList, setSkillList] = useRecoilState(lectureSkillState);
  const setIsDisable = useSetRecoilState(isDisableState);

  const setLectureDataList = useSetRecoilState(lectureDataList);
  const setLectureCategory = async (): Promise<void> => {
    const result = await getLectureCategoryData();

    setCategoryList(result);
  };

  const setLectureSkill = async (id: number): Promise<void> => {
    const result = await getLectureSkillData(id);

    setSkillList(result);
  };

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const result = categoryList?.filter((category) => category.id === id)[0] || null;

      setCurrentCategory(result);
      // setLectureSkill(id);
      setSkillList(dummySkillList);
    }
  };

  const handleSkillClick = async (SkillId: number | null) => {
    if (SkillId) {
      const result = skillList?.filter((skill) => skill.id === SkillId)[0] || null;
      const categoryId = category?.id;

      if (categoryId) {
        const data = await getLectureDataList(categoryId, SkillId);

        setIsDisable(false);
        setLectureDataList(data); //확인필요
        setCurrentSkill(result); //비동기라서 변경이 늦게된다. , skillId사용하기위함.
      }
    }
  };

  useEffect(() => {
    // setLectureCategory();
    setCurrentSkill({ id: 1, skillName: "" });
    setCategoryList(dummyCategoryList);
  }, []);

  return (
    <div>
      {category?.id !== -1 && currentSkill?.id && <RedirectProcessButton />}
      <CategoryAndSkillList onCategoryClick={handleCategoryClick} onSkillClick={handleSkillClick} />
      <Background>
        <Result />
      </Background>
    </div>
  );
}

export default Category;
