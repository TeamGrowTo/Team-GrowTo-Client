// import { RequestRankLine } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import { Id, Line, MobileLine, Number, RequestNumber, StyledRoot, Title, Wrapper } from "./style";

interface IProps {
  rank: {
    id: number;
    name: string;
    skill: string;
    number: number;
  };
  rankNumber: number;
}

export default function Rank({ rank, rankNumber }: IProps) {
  const { name, skill, number } = rank;

  return (
    <StyledRoot>
      <Id>{rankNumber + 1}</Id>
      <Wrapper>
        <Title>
          <h4>{name}</h4>
          <h3>{skill}</h3>
        </Title>
        <Screen desktop>
          <Line />
        </Screen>
        <Screen mobile>
          <MobileLine />
        </Screen>
        <RequestNumber>
          <h5>비교요청 수</h5>
          <Number>
            <p>{number}</p>
            /100
          </Number>
        </RequestNumber>
      </Wrapper>
    </StyledRoot>
  );
}
