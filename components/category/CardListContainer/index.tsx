import React from "react";
import { useRecoilValue } from "recoil";
import { lectureDataList } from "store/state";
import { LectureDataListType, ResponseLectureDataType } from "types/info.type";

import CardBox from "../CardBox";
import { StyledRoot } from "./style";

function CardListContainer() {
  const LectureDataList = useRecoilValue(lectureDataList);

  return (
    <StyledRoot>
      {LectureDataList?.map((lecture: ResponseLectureDataType) => (
        <CardBox key={lecture.LectureTitle} lecture={lecture} />
      ))}
    </StyledRoot>
  );
}

export default CardListContainer;
