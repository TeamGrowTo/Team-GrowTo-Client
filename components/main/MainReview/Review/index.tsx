import React from "react";

import { Bottom, Comment, ImgWrapper, Introduce, StyledRoot } from "./style";

interface IProps {
  review: {
    comment: string;
    Profile: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    nickname: string;
    id: string;
    isTransparent: boolean;
  };
}

export default function Review({ review }: IProps) {
  const { comment, Profile, id, nickname, isTransparent } = review;

  return (
    <StyledRoot isTransparent={isTransparent}>
      <Comment>{comment}</Comment>
      <Bottom>
        <ImgWrapper>
          <Profile />
        </ImgWrapper>
        <Introduce>
          <div>{nickname}</div>
          <div>{id}</div>
        </Introduce>
      </Bottom>
    </StyledRoot>
  );
}
