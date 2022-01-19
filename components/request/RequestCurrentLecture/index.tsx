// import { getCurrentLectureData } from "pages/apis/lectures.api";
// import React, { useEffect, useState } from "react";

import CurrentLecture from "./CurrentLecture";
import { CurrentList, StyledRoot, Title, Wrapper } from "./style";

export default function RequestCurrentLecture() {
  const currentLectureInfo = [
    { id: 1, name: "개발", skill: "파이썬" },
    { id: 2, name: "디자인", skill: "피그마" },
    { id: 3, name: "개발", skill: "자바스크립트" },
    { id: 4, name: "개발", skill: "html & css" },
    { id: 5, name: "데이터", skill: "데이터" },
    { id: 6, name: "그로투", skill: "짱짱짱" },
  ];

  // const [compareLecture, setCompareLecture] = useState([]);

  // useEffect(async () => {
  //   setCompareLecture(await getCurrentLectureData);
  // }, []);

  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>현재 비교중인 강의</h2>
          <p>100명 이상이 비교를 요청하여, 그로투가 비교 중인 강의에요!</p>
        </Title>
        <CurrentList>
          {currentLectureInfo.map((currentLecture) => (
            <CurrentLecture currentLecture={currentLecture} key={currentLecture.id} />
          ))}
        </CurrentList>
      </Wrapper>
    </StyledRoot>
  );
}
