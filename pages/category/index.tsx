import { getLectureCategoryData, getLectureSkillData } from "apis/info.api";
import { getLectureDataList } from "apis/lectures.api";
import CategoryAndSkillList from "components/category/CategoryAndSkillList";
import MobileModal from "components/category/CategoryAndSkillList/MobileModal";
import MobileCategoryAndSkill from "components/category/MobileCategoryAndSkill";
import RedirectProcessButton from "components/category/RedirectProcessButton";
import Result from "components/category/Result";
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
import styled from "styled-components";
import { colors } from "styles/colors";
import Screen from "styles/Screen";

function Category() {
  const [category, setCurrentCategory] = useRecoilState(currentCategoryState);
  const [currentSkill, setCurrentSkill] = useRecoilState(currentSkillState);
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const [skillList, setSkillList] = useRecoilState(lectureSkillState);
  const setIsDisable = useSetRecoilState(isDisableState);
  const setLectureDataList = useSetRecoilState(lectureDataList);
  const [categorySkillOpenFlag, setCategorySkillOpenFlag] = useState(false);

  const setLectureCategory = async (): Promise<void> => {
    const result = await getLectureCategoryData();

    setCategoryList(result);
  };

  const setLectureSkill = async (id: number): Promise<void> => {
    const result = await getLectureSkillData(id);

    setSkillList(result);
  };

  const getSkillList = async (id: number, SkillId: number | null) => {
    return await getLectureDataList(id, SkillId);
  };

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const result = categoryList?.filter((category) => category.id === id)[0] || null;

      setCurrentCategory(result);
      setLectureSkill(id);
      setCurrentSkill({ id: -1, skillName: "" });
    }
  };

  const handleSkillClick = async (SkillId: number | null) => {
    if (SkillId) {
      const result = skillList?.filter((skill) => skill.id === SkillId)[0] || null;
      const categoryId = category?.id;

      if (categoryId) {
        const data = await getSkillList(categoryId, SkillId);

        setIsDisable(false);
        setLectureDataList(data); //확인필요
        setCurrentSkill(result); //비동기라서 변경이 늦게된다. , skillId사용하기위함.
      }
    }
  };

  const handleCategorySkillOpen = (state: boolean) => {
    setCategorySkillOpenFlag(state);
  };

  useEffect(() => {
    setLectureCategory();
    if (category?.id && category?.id !== -1) setLectureSkill(category.id);
    if (!currentSkill) setCurrentSkill({ id: -1, skillName: "" });
  }, []);

  return (
    <div>
      {category && category?.id !== -1 && currentSkill && currentSkill?.id !== -1 && (
        <RedirectProcessButton />
      )}
      <Screen desktop>
        <CategoryAndSkillList
          onCategoryClick={handleCategoryClick}
          onSkillClick={handleSkillClick}
        />
      </Screen>
      <Screen mobile>
        {categorySkillOpenFlag ? (
          <MobileModal
            onCategoryClick={handleCategoryClick}
            onSkillClick={handleSkillClick}
            onClickCategorySkill={handleCategorySkillOpen}
          />
        ) : (
          <MobileCategoryAndSkill onClick={handleCategorySkillOpen}></MobileCategoryAndSkill>
        )}
      </Screen>
      <Background>
        <Result />
      </Background>
    </div>
  );
}

export default Category;

const Background = styled.section`
  background-color: ${colors.gray0};
  width: 100%;
`;
