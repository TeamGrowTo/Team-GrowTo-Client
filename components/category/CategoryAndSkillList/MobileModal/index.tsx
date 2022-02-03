import Link from "next/link";
import { CategoryRightArrowIcon, IcCategoryLeftArrowIcon } from "public/assets/icons";
import React, { useEffect } from "react";

import CategoryList from "../CategoryList";
import SkillList from "../SkillList";
import { CloseCategoryAndSkill, ListWrapper, RedirectRequestPage, StyledRoot } from "./style";

interface Props {
  onCategoryClick: (id: number | null) => void;
  onSkillClick: (id: number | null) => void;
  onClickCategorySkill?: (state: boolean) => void;
}

function MobileModal({ onCategoryClick, onSkillClick, onClickCategorySkill }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onClickBack = () => {
    if (onClickCategorySkill) onClickCategorySkill(false);
    document.body.style.overflow = "unset";
  };

  return (
    <StyledRoot>
      <CloseCategoryAndSkill onClick={onClickBack}>
        <IcCategoryLeftArrowIcon />
        <span>돌아가기</span>
      </CloseCategoryAndSkill>
      <ListWrapper>
        <CategoryList onCategoryClick={onCategoryClick} />
        <SkillList onSkillClick={onSkillClick} />
      </ListWrapper>
      <Link href="/request" passHref>
        <RedirectRequestPage>
          <span>추가적으로 비교를 원하는 분야가 있다면?</span>
          <CategoryRightArrowIcon />
        </RedirectRequestPage>
      </Link>
    </StyledRoot>
  );
}

export default MobileModal;
