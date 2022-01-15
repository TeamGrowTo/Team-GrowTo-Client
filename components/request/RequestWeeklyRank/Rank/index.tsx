import RequestRankLine from "public/assets/icons";
import React from "react";

interface IProps {
  rank: {
    id: number;
    name: string;
    skill: string;
    number: number;
  };
}

export default function Rank({ rank }: IProps) {
  const { id, name, skill, number } = rank;

  return (
    <StyledRoot>
      <Id>{id}</Id>
      <Wrapper>
        <Title>
          <h4>{name}</h4>
          <h3>{skill}</h3>
        </Title>
        <RequestRankLine />
        <RequestNumber>
          <p>{number}/100</p>
        </RequestNumber>
      </Wrapper>
    </StyledRoot>
  );
}
