import React from "react";

import { Bottom, Comment, Introduce, StyledRoot } from "./style";

interface IProps {
  review: {
    comment: string;
    Profile: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    nickname: string;
    id: string;
  };
}

export default function Review({ review }: IProps) {
  const { comment, Profile, id, nickname } = review;

  return (
    <StyledRoot>
      <Comment>{comment}</Comment>
      <Bottom>
        <Profile />
        <Introduce>
          <div>{nickname}</div>
          <div>{id}</div>
        </Introduce>
      </Bottom>
    </StyledRoot>
  );
}
