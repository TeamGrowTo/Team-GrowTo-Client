import React from "react";
import Screen from "styles/Screen";

import LargeCardBox from "./LargeCardBox";
import SmallCardBox from "./SmallCardBox";

function CardBox() {
  return (
    <>
      <Screen desktop>
        <LargeCardBox />
      </Screen>
      <Screen mobile>
        <SmallCardBox />
      </Screen>
    </>
  );
}

export default CardBox;
