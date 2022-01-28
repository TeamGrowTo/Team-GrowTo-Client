import React from "react";

import { StyledRoot, SubInfoUnit } from "./style";
interface Props {
  replay: number;
  answer: string;
}

function SubInfo({ replay, answer }: Props) {
  const formattingReplay = (replay: number) => {
    return replay === 100000000 ? "무제한" : `${replay}시간`;
  };

  return (
    <StyledRoot>
      <SubInfoUnit>
        반복시청 <span>{formattingReplay(replay)}</span>
      </SubInfoUnit>
      <span> | </span>
      <SubInfoUnit>
        질문답변 <span>{answer}</span>
      </SubInfoUnit>
    </StyledRoot>
  );
}

export default SubInfo;
