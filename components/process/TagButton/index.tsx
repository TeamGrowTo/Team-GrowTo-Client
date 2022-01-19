import React from "react";

import { StyledRoot } from "./style";
interface IProps {
  tag: string;
  onTagClick: (interest: string) => void;
  selectedTags: string[];
}
const TagButton = ({ tag, onTagClick, selectedTags }: IProps) => {
  const handleTagClick = () => {
    onTagClick(tag);
  };
  const isClicked = selectedTags[0] === tag || selectedTags[1] === tag ? true : false;

  return (
    <StyledRoot onClick={handleTagClick} isClicked={isClicked}>
      {tag}
    </StyledRoot>
  );
};

export default TagButton;
