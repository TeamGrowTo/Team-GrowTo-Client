import React from "react";

import { Bottom, Comment, Id, StyledRoot, Wrapper } from "./style";

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
        <Wrapper>
          <Profile />
          <Id>{id}</Id>
        </Wrapper>
      </Bottom>
    </StyledRoot>
  );
}
