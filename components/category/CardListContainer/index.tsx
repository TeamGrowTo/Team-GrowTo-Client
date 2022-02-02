import { CategoryClickImg } from "assets/images";
import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";
import { lectureDataList } from "store/state";
import { LectureDataType } from "types/info.type";

import CardBox from "../CardBox";
import { ImgWrapper, StyledRoot } from "./style";

function CardListContainer() {
  const lectureDataListState = useRecoilValue(lectureDataList);

  console.log(lectureDataListState);

  return (
    <StyledRoot>
      {lectureDataListState ? (
        lectureDataListState?.map((lecture: LectureDataType) => (
          <CardBox key={lecture.id} lecture={lecture} />
        ))
      ) : (
        <ImgWrapper>
          <Image src={CategoryClickImg} alt="clickIcon" />
        </ImgWrapper>
      )}
    </StyledRoot>
  );
}

export default CardListContainer;
