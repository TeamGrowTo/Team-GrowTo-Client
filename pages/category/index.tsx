import { getLectureCategoryData, getLectureSkillData } from "apis/info.api";
import { getLectureDataList, getSortingLectureDataList } from "apis/lectures.api";
import CategoryAndSkillList from "components/category/CategoryAndSkillList";
import RedirectProcessButton from "components/category/RedirectProcessButton";
import Result from "components/category/Result";
import { SortingText } from "components/category/SortingBox";
import SEO from "components/common/SEO";
import { UseSorting } from "hooks/UseCategorySorting";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureCategoryState,
  lectureDataList,
  lectureSkillState,
  SortingItemType,
} from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

function Category() {
  const [category, setCurrentCategory] = useRecoilState(currentCategoryState);
  const [currentSkill, setCurrentSkill] = useRecoilState(currentSkillState);
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const [skillList, setSkillList] = useRecoilState(lectureSkillState);

  const setIsDisable = useSetRecoilState(isDisableState);
  const setLectureDataList = useSetRecoilState(lectureDataList);

  const currentSorting = useRecoilValue(currentSortingState);
  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetIsSelected = useResetRecoilState(isSelectedState);
  const resetSkillData = useResetRecoilState(currentSkillState);

  const setLectureCategory = async (): Promise<void> => {
    const result = await getLectureCategoryData();

    const { filterCategory } = UseSorting();
    const categoryViewArr = ["개발", "기획", "디자인", "마케팅", "데이터", "기타"];
    const filteredCategoryList = filterCategory(result, categoryViewArr);

    setCategoryList(filteredCategoryList);
  };

  const setLectureSkill = async (id: number): Promise<void> => {
    const result = await getLectureSkillData(id);

    setSkillList(result);
  };

  //카테고리를 눌렀을 시 reset되어야하는 recoil값들
  const resetData = () => {
    resetSkillData();
    resetLectureListData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
    resetIsSelected();
  };

  const findSelectedCategory = (currentSelectedCategoryId: number) => {
    return categoryList?.filter((category) => category.id === currentSelectedCategoryId)[0] || null;
  };

  const findSelectedSkill = (currentSelectedSkillId: number) => {
    return skillList?.filter((skill) => skill.id === currentSelectedSkillId)[0] || null;
  };

  const handleCategoryClick = (categoryId: number | null) => {
    if (categoryId) {
      const result = findSelectedCategory(categoryId);

      setCurrentCategory(result);
      setLectureSkill(categoryId);
      setCurrentSkill({ id: -1, skillName: "" });
      resetData();
    }
  };

  const getSortingAndLectureList = async (
    selectedSorting: string[],
    categoryId: number | null,
    skillId: number | null,
  ) => {
    if (selectedSorting.length === 0) {
      //빈문자열인것만 있다면 selectedSorting이 []
      const LectureList = await getLectureDataList(categoryId, skillId);

      setLectureDataList(LectureList);
    } else {
      //1-2. sorting기준 있으면
      //1. currentSorting중 빈문자열이 아닌 프로퍼티를 가져온다.= selectedSorting
      const strSorting = selectedSorting.join() as SortingItemType;
      //2. 해당 문자열을 enum의인덱스로 넣어 영문으로 변환한다.
      const ordering = SortingText[strSorting];
      //3. 선택한 소팅기준으로 강의리스트를 불러오는 함수를 사용한다.
      const LectureList = await getSortingLectureDataList(categoryId, skillId, ordering);

      setLectureDataList(LectureList);
    }
  };

  const handleSkillClick = async (skillId: number | null) => {
    if (skillId) {
      //click한 skill의 Id와 skillList의 skill들의 id와 같은 것을 result에 담는다.
      const result = findSelectedSkill(skillId);
      const categoryId = category?.id; //현재 선택되어 있는 category의 id.

      if (categoryId) {
        //skill과 category모두 선택되어 있을 때,
        //1. if문: currentSorting중 빈문자열이 아닌 프로퍼티가 있는지 확인
        const selectedSorting = Object.values(currentSorting).filter((value) => value !== "");

        getSortingAndLectureList(selectedSorting, categoryId, skillId);
        setCurrentSkill(result);
        setIsDisable(false);
        //1-1없으면 전체리스트 불러온다.
      }
    }
  };

  useEffect(() => {
    setLectureCategory();
    if (!category) setCurrentCategory({ id: -1, categoryName: "" });
    if (!currentSkill) setCurrentSkill({ id: -1, skillName: "" });
    if (currentSkill?.id && currentSkill?.id !== -1) setIsDisable(false); //skill선택되어있다면 새로고침 시 sorting버튼도 활성화유지
    if (category?.id && category?.id !== -1) setLectureSkill(category.id);
  }, []);

  return (
    <div>
      <SEO title="그로투 - IT강의 분야 비교 한 눈에" content="어떤 분야에서 성장을 원하시나요? " />
      <CategoryAndSkillList onCategoryClick={handleCategoryClick} onSkillClick={handleSkillClick} />
      <Background>
        {category && category?.id !== -1 && currentSkill && currentSkill?.id !== -1 && (
          <RedirectProcessButton />
        )}
        <Result />
      </Background>
    </div>
  );
}

export default Category;

const Background = styled.section`
  background-color: ${colors.gray0};
  width: 100%;
  position: relative;
  padding-top: 6.6rem;
  ${applyMediaQuery("mobile")} {
    padding-top: 5.2rem;
  }
`;
