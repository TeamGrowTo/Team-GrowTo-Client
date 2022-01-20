import Result from "components/category/Result";
import BlueButton from "components/common/BlueButton";
import MiddleNotification from "components/result/MiddleNotification";
import ProcessResult from "components/result/ProcessResult";
import Question from "components/result/Question";
import ResultShareButton from "components/result/ResultShareButton";
import { useRouter } from "next/router";
import { getLectureDataList, getLectureResultData } from "pages/apis/lectures.api";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  lectureDataList,
  lectureResultState,
} from "store/state";
import { LectureResultData, LecturesResultAllData } from "types/lectures.type";

import { StyledRoot } from "./style";

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

  const setLectureResultList = useSetRecoilState(lectureResultState);
  const setLectureDataList = useSetRecoilState(lectureDataList);
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  const setCurrentSkill = useSetRecoilState(currentSkillState);
  const [listLength, setListLength] = useState(0);
  const [category, setCategory] = useState({ id: -1, name: "" });
  const [skill, setSkill] = useState({ id: -1, name: "" });
  const { id } = router.query;

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
    }
  };

  //category id와 skill id로 강의리스트들 불러오는 함수
  const GetLecturefromSkillId = async (skillId: number, categoryId: number) => {
    const data = await getLectureDataList(categoryId, skillId);

    setLectureDataList(data);
  };

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

  //categoryId, skillId로 api보내서 받은 response를 cardList 컴포넌트에 넣어주자
  const handleMoveToCategory = () => {
    router.push("/category");
  };

  return (
    <StyledRoot>
      <ProcessResult listLength={listLength} categoryName={category.name} skillName={skill.name} />
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
