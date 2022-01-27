import { getLectureDataList, getLectureResultData } from "apis/lectures.api";
import Result from "components/category/Result";
import BlueButton from "components/common/BlueButton";
import MiddleNotification from "components/result/MiddleNotification";
import ProcessResult from "components/result/ProcessResult";
import Question from "components/result/Question";
import ResultCardDot from "components/result/ResultCardDot";
import ResultShareButton from "components/result/ResultShareButton";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  lectureDataList,
  lectureResultState,
  lectureSkillState,
} from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import Screen from "styles/Screen";
import { LectureResultData, LecturesResultAllData } from "types/lectures.type";

// type Answer = "fast" | "middle" | "slow";
// interface ProcessResultData {
//   id: number;
//   lectureName: string;
//   time: number;
//   price: number;
//   createdDate: number;
//   replay: boolean;
//   answer: Answer;
//   tags: string[];
//   url: string;
// }
const dummy: LectureResultData[] = [
  {
    name: "퍼포먼스 마케팅, 데이터로 완전 정복",
    time: 55,
    price: 22,
    createdDate: -1,
    replay: 180,
    answer: "Slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "https://www.naver.com/",
  },
  {
    name: "초보도 퍼포먼스 내는 디지털 마스터 패키지",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: 200,
    answer: "Slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
  {
    name: "업무성과를 내는 퍼포먼스 마케팅 실전",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: 100000000,
    answer: "Slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
];

type Result = LecturesResultAllData | null;

function Category() {
  const router = useRouter();

  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetSkillData = useResetRecoilState(currentSkillState);
  const resetLectureSkillData = useResetRecoilState(lectureSkillState);
  const resetCategoryData = useResetRecoilState(currentCategoryState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);

  const setLectureResultList = useSetRecoilState(lectureResultState);
  const setLectureDataList = useSetRecoilState(lectureDataList);
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  const setCurrentSkill = useSetRecoilState(currentSkillState);
  const setIsDisable = useSetRecoilState(isDisableState);
  const [listLength, setListLength] = useState(0);
  const [category, setCategory] = useState({ id: -1, name: "" });
  const [skill, setSkill] = useState({ id: -1, name: "" });
  const [sliderPage, setSliderPage] = useState(0);
  const { id } = router.query;

  useEffect(() => {
    //api불러오는 함수
    if (category.id >= 0 && skill.id >= 0) {
      GetLecturefromSkillId(skill.id, category.id);
    }
  }, [skill.id, category.id]);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      getLectureResult();
      // setLectureResultList(dummy);
      // setCategory({ id: 1, name: "마케팅" });
      // setSkill({ id: 3, name: "디지털&퍼포먼스" });
    }
  }, [id]);

  const getLectureResult = async (): Promise<void> => {
    const data: Result = await getLectureResultData(id);

    // data에는 category, skill가 들어있답니다. LecturesResultAllData type 을 참고해보세요.
    if (data) {
      setLectureResultList(data.result.slice(0, 3));
      setListLength(data.result.length < 3 ? data.result.length : 3);
      setCategory(data.category);
      setCurrentCategory({ id: data.category.id, categoryName: data.category.name });
      setSkill(data.skill);
      setCurrentSkill({ id: data.skill.id, skillName: data.skill.name });
      setIsDisable(false);
    }
  };

  //category id와 skill id로 강의리스트들 불러오는 함수
  const GetLecturefromSkillId = async (skillId: number, categoryId: number) => {
    const data = await getLectureDataList(categoryId, skillId);

    setLectureDataList(data);
  };

  //categoryId, skillId로 api보내서 받은 response를 cardList 컴포넌트에 넣어주자
  const handleMoveToCategory = () => {
    resetLectureListData();
    resetSkillData();
    resetCategoryData();
    resetLectureSkillData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
    router.push("/category");
  };

  const onChangeSliderPage = (page: number) => {
    setSliderPage(page);
  };

  return (
    <StyledRoot>
      <ProcessResult
        listLength={listLength}
        categoryName={category.name}
        skillName={skill.name}
        sliderPage={sliderPage}
        onChangeSliderPage={onChangeSliderPage}
      />
      <Screen mobile>
        <ResultCardDot listLength={listLength} sliderPage={sliderPage} />
      </Screen>
      <ResultShareButton />
      <MiddleNotification />
      <Result />
      <BlueButton onClick={handleMoveToCategory} width="96%" maxWidth="84.5rem">
        다른 강의 비교하기
      </BlueButton>
      <Question />
    </StyledRoot>
  );
}

export default Category;

const StyledRoot = styled.div`
  background-color: ${colors.gray0};
  height: 100%;
  padding-bottom: 20.5rem;
`;
