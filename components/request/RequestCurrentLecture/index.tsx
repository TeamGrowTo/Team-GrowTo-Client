import { getCurrentLectureData } from "apis/lectures.api";
import React, { useEffect, useState } from "react";
import { CurrentCompareData } from "types/lectures.type";

import CurrentLecture from "./CurrentLecture";
import { CurrentList, StyledRoot, Title } from "./style";

export default function RequestCurrentLecture() {
  const [compareLecture, setCompareLecture] = useState<CurrentCompareData[] | null>([]);

  const currentCompareLecture = async () => {
    const data = await getCurrentLectureData();

    data && setCompareLecture(data);
  };

  useEffect(() => {
    currentCompareLecture();
  }, []);

  return (
    <StyledRoot>
      <div>
        <Title>
          <h2>현재 비교중인 강의</h2>
          <p>100명 이상이 비교를 요청하여, 그로투가 비교 중인 강의에요!</p>
        </Title>
        <CurrentList>
          {compareLecture?.map((currentLecture, index) => (
            <CurrentLecture currentLecture={currentLecture} key={currentLecture.id} index={index} />
          ))}
        </CurrentList>
      </div>
    </StyledRoot>
  );
}
