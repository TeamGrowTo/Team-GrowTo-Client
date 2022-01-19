import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { lectureDataList } from "store/state";

import CardBox from "../CardBox";
import { StyledRoot } from "./style";

function CardListContainer() {
  const LectureDataList = useRecoilValue(lectureDataList);

  return (
    <StyledRoot>
      {LectureDataList?.data.map((lecture) => (
        <CardBox key={lecture.LectureTitle} lecture={lecture} />
      ))}
      {/* <CardBox />
      <CardBox />
      <CardBox />
      <CardBox />
      <CardBox /> */}
    </StyledRoot>
  );
}

export default CardListContainer;
