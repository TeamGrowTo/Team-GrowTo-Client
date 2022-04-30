import Image from "next/image";
import {
  ResultCardCalenderIcon,
  ResultCardPriceIcon,
  ResultCardReplayTimeIcon,
  ResultCardVideoIcon,
} from "public/assets/icons";
import React from "react";

import { InfoData, InfoName, StyledRoot } from "./style";

interface Props {
  replay: number;
  time: number;
  price: number;
  createdDate: number;
}

const iconList = [
  ResultCardVideoIcon,
  ResultCardReplayTimeIcon,
  ResultCardCalenderIcon,
  ResultCardPriceIcon,
];

function Info({ replay, time, price, createdDate }: Props) {
  const formattingTime = (time: number) => {
    return time === -1 ? "미표기" : `총 ${time}시간`;
  };

  const formattingPrice = (price: number) => {
    return price === -1 ? "미표기" : `${price.toLocaleString("ko-KR")}원`;
  };

  const formattingCreatedDate = (createdDate: number) => {
    return createdDate === -1 ? "미표기" : `${createdDate}년 개설`;
  };

  const formattingReplay = (replay: number) => {
    return replay === 100000000 ? "무제한 반복 시청 가능" : `${replay}일 시청 가능`;
  };

  return (
    <StyledRoot>
      <InfoName>
        {iconList.map((icon, index) => (
          <li key={index}>
            <Image src={icon} alt="resultCardIcon" />
          </li>
        ))}
      </InfoName>
      <InfoData>
        <li>{formattingReplay(replay)}</li>
        <li>{formattingTime(time)}</li>
        <li>{formattingCreatedDate(createdDate)}</li>
        <li>{formattingPrice(price)}</li>
      </InfoData>
    </StyledRoot>
  );
}

export default Info;
