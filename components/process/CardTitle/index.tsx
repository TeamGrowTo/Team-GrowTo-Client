import { useRouter } from "next/router";
import React from "react";

import { CardText, ProgressBarPrice, ProgressBarTag, ProgressBarTime, StyledRoot } from "./style";
function CardTitle() {
  const router = useRouter();
  const PATH_NAME = router.pathname;

  const te = "마케팅";

  return (
    <StyledRoot>
      <CardText>
        <p>{te} 실력 성장을 위한</p>
        <p>{te} 강의 찾기</p>
      </CardText>
      {PATH_NAME === "/processTag" ? (
        <ProgressBarTag />
      ) : PATH_NAME === "/processTime" ? (
        <ProgressBarTime />
      ) : (
        <ProgressBarPrice />
      )}
    </StyledRoot>
  );
}

export default CardTitle;
