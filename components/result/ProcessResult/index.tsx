import { StyledRoot } from "components/main/banner/style";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Answer = "fast" | "middle" | "slow";
interface ProcessResultData {
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
    lectureName: "퍼포먼스 마케팅, 데이터로 완전 정복",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: true,
    answer: "slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
  {
    lectureName: "퍼포먼스 마케팅, 데이터로 완전 정복",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: true,
    answer: "slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
  {
    lectureName: "퍼포먼스 마케팅, 데이터로 완전 정복",
    time: 55,
    price: 22,
    createdDate: 2022,
    replay: true,
    answer: "slow",
    tags: ["실습 프로젝트20종", "광고집행률", "데이터수집추적분석툴", "앱마케팅", "웹최적화"],
    url: "",
  },
];

const ProcessResult = () => {
  const router = useRouter();
  const [lectureList, setLectureList] = useState(11);

  return (
    <StyledRoot>
      <h1>그로투 강의 비교</h1>
      <h2>
        <span>총 ${lectureList}개</span>의 <span>디지털&퍼포먼스 마케팅 강의 중</span>
      </h2>
      <h2>
        {" "}
        나에게 <span>딱 맞는 ${}가지</span> 강의에요!
      </h2>
    </StyledRoot>
  );
};

export default ProcessResult;
