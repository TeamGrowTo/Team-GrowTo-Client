import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState } from "store/state";
import Screen from "styles/Screen";

import {
  CardText,
  ProgressBarPrice,
  ProgressBarPriceM,
  ProgressBarTag,
  ProgressBarTagM,
  ProgressBarTime,
  ProgressBarTimeM,
  StyledRoot,
} from "./style";
function CardTitle() {
  const router = useRouter();
  const PATH_NAME = router.pathname;

  const categoryState = useRecoilValue(currentCategoryState);
  const skillState = useRecoilValue(currentSkillState);

  return (
    <StyledRoot>
      <CardText>
        <p>{categoryState?.categoryName} 실력 성장을 위한</p>
        <p>&#91;{skillState?.skillName}&#93; 강의 찾기</p>
      </CardText>
      <Screen desktop>
        {PATH_NAME === "/processTag" ? (
          <ProgressBarTag />
        ) : PATH_NAME === "/processTime" ? (
          <ProgressBarTime />
        ) : (
          <ProgressBarPrice />
        )}
      </Screen>
      <Screen mobile>
        {PATH_NAME === "/processTag" ? (
          <ProgressBarTagM />
        ) : PATH_NAME === "/processTime" ? (
          <ProgressBarTimeM />
        ) : (
          <ProgressBarPriceM />
        )}
      </Screen>
    </StyledRoot>
  );
}

export default CardTitle;
