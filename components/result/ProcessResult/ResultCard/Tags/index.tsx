import React from "react";
import { TagData } from "types/lectures.type";

import { StyledRoot, Tag } from "./style";

interface Props {
  tags: TagData[];
}

interface ITags {
  [key: string]: string;
}

function Tags({ tags }: Props) {
  const tagType: ITags = {
    사용툴: "tagTool",
    커리큘럼: "tagCurriculum",
    강좌특성: "tagProperty",
    난이도: "tagLevel",
  };

  return (
    <StyledRoot>
      {tags.map((tag, index: number) => (
        <Tag key={index} tagType={tagType[tag.type]}>
          <small>{tag.name}</small>
        </Tag>
      ))}
    </StyledRoot>
  );
}

export default Tags;
