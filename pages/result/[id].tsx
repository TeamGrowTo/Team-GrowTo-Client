import { getLectureDataList, getLectureResultData } from "apis/lectures.api";
import Result from "components/category/Result";
import BlueButton from "components/common/BlueButton";
import SEO from "components/common/SEO";
import MiddleNotification from "components/result/MiddleNotification";
import ProcessResult from "components/result/ProcessResult";
import Question from "components/result/Question";
import ResultCardDot from "components/result/ResultCardDot";
import ResultShareButton from "components/result/ResultShareButton";
import { AnyRecord } from "dns";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureDataList,
  lectureResultState,
  lectureSkillState,
} from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import Screen from "styles/Screen";
import { LecturesResultAllData } from "types/lectures.type";

type Result = LecturesResultAllData | null;

function Category() {
  const router = useRouter();

  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetSkillData = useResetRecoilState(currentSkillState);
  const resetLectureSkillData = useResetRecoilState(lectureSkillState);
  const resetCategoryData = useResetRecoilState(currentCategoryState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetIsSelected = useResetRecoilState(isSelectedState);
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

  //result페이지에서 뒤로가기 시 category페이지로 이동하는 함수
  //next router에서 제공하는 history가 변경될 때를 감지하는 함수 사용
  useEffect(() => {
    const handleHistoryChange = async (url: string) => {
      if (url === "/processTag" || url === "/processPrice" || url === "/processTime") {
        await router.push("/category");
      }
    };

    router.events.on("beforeHistoryChange", handleHistoryChange);

    return () => {
      router.events.off("beforeHistoryChange", handleHistoryChange);
    };
  }, []);

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
    resetIsSelected();
    resetCurrentSorting();
    router.push("/category");
  };

  const onChangeSliderPage = (page: number) => {
    setSliderPage(page);
  };

  return (
    <>
      <SEO title="그로투 - 나에게 맞는 강의" content="당신에게 딱 맞는 IT강의를 가져왔어요" />
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
        {/* <Result /> */}
        <Screen desktop>
          <BlueButton onClick={handleMoveToCategory} width="96%" maxWidth="84.5rem">
            다른 강의 비교하기
          </BlueButton>
        </Screen>
        <Screen mobile>
          <BlueButton
            onClick={handleMoveToCategory}
            fontSize="1.6rem"
            width="96%"
            height="4rem"
            maxWidth="32.8rem"
          >
            다른 강의 비교하기
          </BlueButton>
        </Screen>
        <Question />
      </StyledRoot>
    </>
  );
}
export default Category;

const StyledRoot = styled.div`
  background-color: ${colors.gray0};
  height: 100%;
  padding-bottom: 20.5rem;
`;
