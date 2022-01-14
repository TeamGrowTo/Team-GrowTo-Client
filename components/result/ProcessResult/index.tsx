import {
  Description,
  LectureCount,
  LectureSkillData,
  ResultCardWrapper,
  ResultData,
  StyledRoot,
  Title,
} from "./style";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import { useRecoilState } from "recoil";
import ResultCard from "./ResultCard";

type Answer = "fast" | "middle" | "slow";
interface ProcessResultData {
  id: number;
  lectureName: string;
  time: number;
  price: number;
  createdDate: number;
  replay: boolean;
  answer: Answer;
  tags: string[];
  url: string;
}
const dummy: ProcessResultData[] = [
  {
    id: 1,
    lectureName: "퍼포먼스 마케팅, 데이터로 완전 정복",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: true,
    answer: "slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "https://www.naver.com/",
  },
  {
    id: 2,
    lectureName: "초보도 퍼포먼스 내는 디지털 마스터 패키지",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: true,
    answer: "slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
  {
    id: 3,
    lectureName: "업무성과를 내는 퍼포먼스 마케팅 실전",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: true,
    answer: "slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
];

const ProcessResult = function () {
  const router = useRouter();
  const [lectureList, setLectureList] = useState(11);
  // const [result, setResult] = useRecoilState();

  return (
    <StyledRoot>
      <Title>그로투 강의 비교</Title>
      <Description>
        <LectureCount>총 {lectureList}개</LectureCount>의{" "}
        <LectureSkillData>
          {"디지털&퍼포먼스"} {"마케팅"} 강의 중
        </LectureSkillData>{" "}
        나에게 <ResultData>딱 맞는 3가지</ResultData> 강의에요!
      </Description>
      <ResultCardWrapper resultDataCount={dummy.length}>
        {dummy.map((data) => (
          <ResultCard key={data.id} result={data} />
        ))}
      </ResultCardWrapper>
    </StyledRoot>
  );
};

export default ProcessResult;
