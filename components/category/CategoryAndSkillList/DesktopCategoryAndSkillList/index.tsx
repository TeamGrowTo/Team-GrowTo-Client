import CategoryToRequest from "components/category/CategoryToRequest";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentSkillState } from "store/state";
import Screen from "styles/Screen";

import CategoryList from "../CategoryList";
import SkillList from "../SkillList";
import { CategoryAndSkillWrapper, StyledRoot, Title } from "./style";

interface Props {
  onCategoryClick: (id: number | null) => void;
  onSkillClick: (id: number | null) => void;
}

function DesktopCategoryAndSkillList({ onCategoryClick, onSkillClick }: Props) {
  const currentSkill = useRecoilValue(currentSkillState);

  return (
    <StyledRoot>
      <CategoryAndSkillWrapper>
        <Title currentSkillId={currentSkill?.id || -1}>강의 분야</Title>
        <CategoryList onCategoryClick={onCategoryClick} />
        <SkillList onSkillClick={onSkillClick} />
        <Screen mobile>
          <CategoryToRequest />
        </Screen>
      </CategoryAndSkillWrapper>
    </StyledRoot>
  );
}

export default DesktopCategoryAndSkillList;
