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
    <StyledRoot
      order={
        id === 1 ? 1 : id === 2 ? 2 : id === 3 ? 3 : id === 4 ? 4 : id === 5 ? 5 : id === 6 ? 6 : 0
      }
    >
      <h3>{name}</h3>
      <h2>{skill}</h2>
    </StyledRoot>
  );
}
