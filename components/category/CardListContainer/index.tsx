import React from "react";

import CardBox from "../CardBox";
import { StyledRoot } from "./style";

function CardListContainer() {
  return (
    <StyledRoot>
      <CardBox />
      <CardBox />
      <CardBox />
      <CardBox />
      <CardBox />
    </StyledRoot>
  );
}

export default CardListContainer;
