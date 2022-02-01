import React from "react";

import { InfoData, InfoName, StyledRoot } from "./style";

interface Props {
  time: number;
  price: number;
  createdDate: number;
}

function Info({ time, price, createdDate }: Props) {
  const formattingTime = (time: number) => {
    return time === -1 ? "미표기" : `${time}시간`;
  };

  const formattingPrice = (price: number) => {
    return price === -1 ? "미표기" : `${(price / 10000).toFixed(1)}만원`;
  };

  const formattingCreatedDate = (createdDate: number) => {
    return createdDate === -1 ? "미표기" : createdDate;
  };

  return (
    <StyledRoot>
      <InfoName>
        <li>총소요시간</li>
        <li>가격</li>
        <li>개설일</li>
      </InfoName>
      <InfoData>
        <li>{formattingTime(time)}</li>
        <li>{formattingPrice(price)}</li>
        <li>{formattingCreatedDate(createdDate)}</li>
      </InfoData>
    </StyledRoot>
  );
}

export default Info;
