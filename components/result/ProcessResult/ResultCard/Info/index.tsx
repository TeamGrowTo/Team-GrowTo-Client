import React from "react";

import { InfoData, InfoName, StyledRoot } from "./style";

interface Props {
  time: number;
  price: number;
  createdDate: string;
}

function Info({ time, price, createdDate }: Props) {
  return (
    <StyledRoot>
      <InfoName>
        <li>총소요시간</li>
        <li>가격</li>
        <li>개설일</li>
      </InfoName>
      <InfoData>
        <li>{time}시간</li>
        <li>{price}만원</li>
        <li>{createdDate}</li>
      </InfoData>
    </StyledRoot>
  );
}

export default Info;
