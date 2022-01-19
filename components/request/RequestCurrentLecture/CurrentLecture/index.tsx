import React from "react";

import { StyledRoot } from "./style";

interface IProps {
  currentLecture: {
    id: number;
    name: string;
    skill: string;
  };
}

export default function CurrentLecture({ currentLecture }: IProps) {
  const { id, name, skill } = currentLecture;

  return (
    <StyledRoot>
      <h3>{name}</h3>
      <h2>{skill}</h2>
    </StyledRoot>
  );
}
