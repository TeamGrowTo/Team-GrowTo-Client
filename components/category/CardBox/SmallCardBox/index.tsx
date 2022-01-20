import React from "react";
import { LectureDataType } from "types/info.type";

import { LectureTitleBox, LectureTitleName, StyledRoot } from "./style";
interface Props {
  lecture: LectureDataType;
}
function SmallCardBox({ lecture }: Props) {
  const { LectureTitle, time, price, duration, reviewTime, startYear, tags, url } = lecture;

  return (
    <StyledRoot>
      <LectureTitleBox>
        <LectureTitleName>{LectureTitle}</LectureTitleName>
      </LectureTitleBox>
    </StyledRoot>
  );
}

export default SmallCardBox;
