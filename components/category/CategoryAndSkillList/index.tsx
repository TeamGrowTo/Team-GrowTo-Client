import Link from "next/link";
import { CategoryRightArrowIcon } from "public/assets/icons";
import React from "react";

import CategoryList from "./CategoryList";
import SkillList from "./SkillList";
import { CategoryAndSkillWrapper, RedirectRequestPage, StyledRoot, Title } from "./style";

interface Props {
  onCategoryClick: (id: number | null) => void;
  onSkillClick: (id: number | null) => void;
}

const CategoryAndSkillList = function ({ onCategoryClick, onSkillClick }: Props) {
  return (
    <StyledRoot>
      <CategoryAndSkillWrapper>
        <Title>강의 분야</Title>
        <CategoryList onCategoryClick={onCategoryClick} />
        <SkillList onSkillClick={onSkillClick} />
        <Link href="/request" passHref>
          <RedirectRequestPage>
            추가적으로 비교를 원하는 분야가 있다면?
            <CategoryRightArrowIcon />
          </RedirectRequestPage>
        </Link>
      </CategoryAndSkillWrapper>
    </StyledRoot>
  );
};

export default CategoryAndSkillList;
