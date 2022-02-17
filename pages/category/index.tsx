import { getLectureCategoryData, getLectureSkillData } from "apis/info.api";
import { getLectureDataList } from "apis/lectures.api";
import CategoryAndSkillList from "components/category/CategoryAndSkillList";
import RedirectProcessButton from "components/category/RedirectProcessButton";
import Result from "components/category/Result";
import React, { useEffect } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  lectureCategoryState,
  lectureDataList,
  lectureSkillState,
  processState,
} from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";

function Category() {
  const [category, setCurrentCategory] = useRecoilState(currentCategoryState);
  const [currentSkill, setCurrentSkill] = useRecoilState(currentSkillState);
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const [skillList, setSkillList] = useRecoilState(lectureSkillState);

  const setIsDisable = useSetRecoilState(isDisableState);
  const setLectureDataList = useSetRecoilState(lectureDataList);

  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetSkillData = useResetRecoilState(currentSkillState);

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

  //카테고리를 눌렀을 시 reset되어야하는 recoil값들
  const resetData = () => {
    resetSkillData();
    resetLectureListData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
  };

  const handleCategoryClick = (id: number | null) => {
    if (id) {
      const result = categoryList?.filter((category) => category.id === id)[0] || null;

      setCurrentCategory(result);
      setLectureSkill(id);
      setCurrentSkill({ id: -1, skillName: "" });
      resetData();
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

  useEffect(() => {
    setLectureCategory();
    if (!category) setCurrentCategory({ id: -1, categoryName: "" });
    if (!currentSkill) setCurrentSkill({ id: -1, skillName: "" });
    if (currentSkill?.id !== -1) setIsDisable(false);
    if (category?.id && category?.id !== -1) setLectureSkill(category.id);
  }, []);

  return (
    <div>
      {category && category?.id !== -1 && currentSkill && currentSkill?.id !== -1 && (
        <RedirectProcessButton />
      )}
      <CategoryAndSkillList onCategoryClick={handleCategoryClick} onSkillClick={handleSkillClick} />
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
