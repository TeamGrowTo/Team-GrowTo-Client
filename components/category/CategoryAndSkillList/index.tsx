import Link from "next/link";
import React from "react";

import CategoryList from "./CategoryList";
import SkillList from "./SkillList";
import { CategoryAndSkillWrapper, RedirectRequestPage, StyledRoot, Title } from "./style";

interface Props {
  nowCategory: number;
  nowSkill: number;
  onCategoryClick: (id: number) => void;
  onSkillClick: (id: number) => void;
}

const CategoryAndSkillList = function ({
  nowCategory,
  nowSkill,
  onCategoryClick,
  onSkillClick,
}: Props) {
  return (
    <StyledRoot>
      <CategoryAndSkillWrapper>
        <Title>강의 분야</Title>
        <CategoryList nowCategory={nowCategory} onCategoryClick={onCategoryClick} />
        <SkillList nowSkill={nowSkill} onSkillClick={onSkillClick} />
        <Link href="/request">
          <RedirectRequestPage>추가적으로 비교를 원하는 분야가 있다면?</RedirectRequestPage>
        </Link>
      </CategoryAndSkillWrapper>
    </StyledRoot>
  );
};

export default CategoryAndSkillList;
