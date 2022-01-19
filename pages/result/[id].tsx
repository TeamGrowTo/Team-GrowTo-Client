import ProcessResult from "components/result/ProcessResult";
import { useRouter } from "next/router";
import { getLectureResultData } from "pages/apis/lectures.api";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { lectureResultState } from "store/state";
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
    createdDate: "2022",
    replay: true,
    answer: "Slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "https://www.naver.com/",
  },
  {
    name: "초보도 퍼포먼스 내는 디지털 마스터 패키지",
    time: 55,
    price: 22,
    createdDate: "2022",
    replay: true,
    answer: "Slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
  {
    name: "업무성과를 내는 퍼포먼스 마케팅 실전",
    time: 55,
    price: 22,
    createdDate: "2022",
    replay: true,
    answer: "Slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
];

type Result = LecturesResultAllData | null;

const Category = () => {
  const router = useRouter();

  const setLectureResultList = useSetRecoilState(lectureResultState);
  const [listLength, setListLength] = useState(0);
  const [category, setCategory] = useState({ id: -1, name: "" });
  const [skill, setSkill] = useState({ id: -1, name: "" });

  const getLectureResult = async (): Promise<void> => {
    const id = router.query.id || "";
    const data: Result = await getLectureResultData(id);
    // data에는 category, skill가 들어있답니다. LecturesResultAllData type 을 참고해보세요.

    if (data) {
      setLectureResultList(data.result);
      setListLength(data.result.length);
      setCategory(data.category);
      setSkill(data.skill);
    }
  };

  useEffect(() => {
    // getLectureResult();
    setLectureResultList(dummy);
    setCategory({ id: 1, name: "마케팅" });
    setSkill({ id: 3, name: "디지털&퍼포먼스" });
  }, []);

  return (
    <StyledRoot>
      <ProcessResult listLength={listLength} categoryName={category.name} skillName={skill.name} />
    </StyledRoot>
  );
};

export default Category;
