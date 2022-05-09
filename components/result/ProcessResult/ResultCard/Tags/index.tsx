import React from "react";
import { TagData } from "types/lectures.type";

import { StyledRoot, Tag } from "./style";

interface Props {
  tags: TagData[];
}

function Tags({ tags }: Props) {
  return (
    <StyledRoot>
      {tags.map((tag, index: number) => (
        <Tag key={index} tagType={tag.type}>
          <small>{tag.name}</small>
        </Tag>
      ))}
    </StyledRoot>
  );
}

export default Tags;
