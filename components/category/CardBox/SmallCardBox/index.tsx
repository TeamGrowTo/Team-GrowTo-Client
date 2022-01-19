import React from "react";
import { LectureDataType } from "types/info.type";

import { LectureTitleName, StyledRoot } from "./style";
interface Props {
  lecture: LectureDataType;
}
function SmallCardBox({ lecture }: Props) {
  return (
    <StyledRoot>
      <LectureTitleBox>
        <LectureTitleName></LectureTitleName>
      </LectureTitleBox>
    </StyledRoot>
  );
}

export default SmallCardBox;
