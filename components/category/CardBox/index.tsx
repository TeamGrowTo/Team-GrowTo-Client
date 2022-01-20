import React from "react";
import Screen from "styles/Screen";
import { LectureDataType } from "types/info.type";

import LargeCardBox from "./LargeCardBox";
import SmallCardBox from "./SmallCardBox";
interface Props {
  lecture: LectureDataType;
}
function CardBox({ lecture }: Props) {
  return (
    <>
      <Screen desktop>
        <LargeCardBox lecture={lecture} />
      </Screen>
      <Screen mobile>
        <SmallCardBox lecture={lecture} />
      </Screen>
    </>
  );
}

export default CardBox;
