import React from "react";
import { LectureResultData } from "types/lectures.type";

import BottomButtons from "./BottomButtons";
import Info from "./Info";
import { Description, LectureSite, LectureTitle, Line, StyledRoot } from "./style";
import Tags from "./Tags";

type Props = {
  result: LectureResultData;
};

function ResultCard({ result }: Props) {
  const { name, time, price, createdDate, replay, tags, url, site } = result;

  return (
    <StyledRoot>
      <Description>
        <LectureSite>{site}</LectureSite>
        <LectureTitle>{name}</LectureTitle>
        <Info replay={replay} time={time} price={price} createdDate={createdDate} />
        <Tags tags={tags} />
      </Description>
      <Line />
      <BottomButtons url={url} />
    </StyledRoot>
  );
}

export default ResultCard;
