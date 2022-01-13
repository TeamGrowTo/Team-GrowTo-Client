import React from "react";

import { StyledRoot } from "../style";
import { Bottom, Comment, Id } from "./style";

interface IProps {
  review: {
    comment: string;
    Profile: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    id: string;
  };
}

export default function Review({ review }: IProps) {
  const { comment, Profile, id } = review;

  return (
    <StyledRoot>
      <Comment>{comment}</Comment>
      <Bottom>
        <Profile />
        <Id>{id}</Id>
      </Bottom>
    </StyledRoot>
  );
}
