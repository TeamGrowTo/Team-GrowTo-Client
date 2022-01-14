import React from "react";

import { StyledRoot, Tag } from "./style";

interface Props {
  tags: string[];
}

const index = function ({ tags }: Props) {
  return (
    <StyledRoot>
      {tags.map((name: string, index: number) => (
        <Tag key={index}>{name}</Tag>
      ))}
    </StyledRoot>
  );
};

export default index;
