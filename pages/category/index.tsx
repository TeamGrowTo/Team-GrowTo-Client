import CategoryAndSkillList from "components/category/CategoryAndSkillList";
import { useRouter } from "next/router";
import { getLectureCategoryData, getLectureSkillData } from "pages/apis/info.api";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { lectureCategoryState, lectureSkillState } from "store/state";
import { LectureCategoryData, LectureSkillData } from "types/info.type";

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

const Category = function () {
  const router = useRouter();
  const [nowCategory, setNowCategory] = useState(Number(router.query.id) || -1);
  const [nowSkill, setNowSkill] = useState(1);

  const setCategoryList = useSetRecoilState(lectureCategoryState);
  const setSkillList = useSetRecoilState(lectureSkillState);

  const setLectureCategory = async (): Promise<void> => {
    const result = await getLectureCategoryData();

    setCategoryList(result);
  };

  const setLectureSkill = async (id: number): Promise<void> => {
    const result = await getLectureSkillData(id);

    setSkillList(result);
  };

  const handleCategoryClick = (id: number | null) => {
    if (typeof id === "number") {
      setNowCategory(id);
      // setLectureSkill(id);
      setSkillList(dummySkillList);
    }
  };

  const handleSkillClick = (id: number | null) => {
    if (typeof id === "number") setNowSkill(id);
  };

  useEffect(() => {
    // setLectureCategory();
    setCategoryList(dummyCategoryList);
  }, []);

  return (
    <div>
      <CategoryAndSkillList
        nowCategory={nowCategory}
        nowSkill={nowSkill}
        onCategoryClick={handleCategoryClick}
        onSkillClick={handleSkillClick}
      />
    </div>
  );
};

export default Category;
