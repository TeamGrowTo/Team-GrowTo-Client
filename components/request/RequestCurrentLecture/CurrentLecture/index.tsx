import React from "react";

import { StyledRoot } from "./style";

interface IProps {
  currentLecture: {
    id: number;
    name: string;
    skill: string;
  };
  index: number;
}

export default function CurrentLecture({ currentLecture, index }: IProps) {
  const { name, skill } = currentLecture;

  return (
    <StyledRoot
      order={
        index + 1 === 1
          ? 1
          : index + 1 === 2
          ? 2
          : index + 1 === 3
          ? 3
          : index + 1 === 4
          ? 4
          : index + 1 === 5
          ? 5
          : index + 1 === 6
          ? 6
          : 0
      }
    >
      <h3>{name}</h3>
      <h2>{skill}</h2>
    </StyledRoot>
  );
}
