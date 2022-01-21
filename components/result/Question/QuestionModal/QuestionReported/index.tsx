import React from "react";

import { Highlight, StyledRoot } from "./style";

interface Props {
  onCloseModal: () => void;
}

function QuestionReported({ onCloseModal }: Props) {
  return (
    <StyledRoot>
      <div>고마워요!</div>
      <p>
        사용자님의 <Highlight>제보</Highlight>로 모두에게{" "}
        <Highlight>더 정확한 정보를 제공</Highlight>할 수 있게 되었어요.
      </p>
      <button onClick={() => onCloseModal()}>확인</button>
    </StyledRoot>
  );
}

export default QuestionReported;
