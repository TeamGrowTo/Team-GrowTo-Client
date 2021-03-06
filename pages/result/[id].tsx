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

  //result??????????????? ???????????? ??? category???????????? ???????????? ??????
  //next router?????? ???????????? history??? ????????? ?????? ???????????? ?????? ??????
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
    //api???????????? ??????
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

    // data?????? category, skill??? ??????????????????. LecturesResultAllData type ??? ??????????????????.
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

  //category id??? skill id??? ?????????????????? ???????????? ??????
  const GetLecturefromSkillId = async (skillId: number, categoryId: number) => {
    const data = await getLectureDataList(categoryId, skillId);

    setLectureDataList(data);
  };

  //categoryId, skillId??? api????????? ?????? response??? cardList ??????????????? ????????????
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
      <SEO title="????????? - ????????? ?????? ??????" content="???????????? ??? ?????? IT????????? ???????????????" />
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
        <Screen desktop>
          <BlueButton onClick={handleMoveToCategory} width="96%" maxWidth="84.5rem">
            ?????? ?????? ????????????
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
            ?????? ?????? ????????????
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
