import React from "react";

import { StyledRoot, Tag } from "./style";

interface Props {
  tags: string[];
}

const index = function ({ tags }: Props) {
  return (
    <StyledRoot>
      {tags.map((name: string, index: number) => (
        <Tag key={index}>
          <small>{name}</small>
        </Tag>
      ))}
    </StyledRoot>
  );
};

export default index;
