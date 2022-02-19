import React from "react";
import Screen from "styles/Screen";

import { Bottom, Comment, Introduce, StyledRoot } from "./style";

interface IProps {
  review: {
    comment: string;
    Profile: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    MobileProfile: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    nickname: string;
    id: string;
    isTransparent: boolean;
    isTransparentMobile: boolean;
  };
}

export default function Review({ review }: IProps) {
  const { comment, Profile, id, nickname, isTransparent, MobileProfile, isTransparentMobile } =
    review;

  return (
    <StyledRoot isTransparent={isTransparent} isTransparentMobile={isTransparentMobile}>
      <Comment>{comment}</Comment>
      <Bottom>
        <div>
          <Screen desktop>
            <Profile />
          </Screen>
          <Screen mobile>
            <MobileProfile />
          </Screen>
        </div>
        <Introduce>
          <div>{nickname}</div>
          <div>{id}</div>
        </Introduce>
      </Bottom>
    </StyledRoot>
  );
}
