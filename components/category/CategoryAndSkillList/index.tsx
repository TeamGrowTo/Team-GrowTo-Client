import Link from "next/link";
import { CategoryRightArrowIcon } from "public/assets/icons";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentSkillState } from "store/state";
import Screen from "styles/Screen";

import CategoryList from "./CategoryList";
import MobileModal from "./MobileModal";
import SkillList from "./SkillList";
import {
  CategoryAndSkillWrapper,
  LinkWrapper,
  RedirectRequestPage,
  StyledRoot,
  Title,
} from "./style";

interface Props {
  onCategoryClick: (id: number | null) => void;
  onSkillClick: (id: number | null) => void;
}

function CategoryAndSkillList({ onCategoryClick, onSkillClick }: Props) {
  const currentSkill = useRecoilValue(currentSkillState);

  return (
    <StyledRoot>
      <CategoryAndSkillWrapper>
        <Title currentSkillId={currentSkill?.id || -1}>강의 분야</Title>
        <CategoryList onCategoryClick={onCategoryClick} />
        <SkillList onSkillClick={onSkillClick} />
        <LinkWrapper>
          <Link href="/request" passHref>
            <RedirectRequestPage>
              <span>추가적으로 비교를 원하는 분야가 있다면?</span>
              <CategoryRightArrowIcon />
            </RedirectRequestPage>
          </Link>
        </LinkWrapper>
      </CategoryAndSkillWrapper>
    </StyledRoot>
  );
}

export default CategoryAndSkillList;
