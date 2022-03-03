import Link from "next/link";
import { CategoryRightArrowIcon, IcCategoryLeftArrowIcon } from "public/assets/icons";
import React, { useEffect } from "react";

import CategoryList from "../CategoryList";
import SkillList from "../SkillList";
import {
  BackButton,
  CloseCategoryAndSkill,
  ListWrapper,
  RedirectRequestPage,
  StyledRoot,
} from "./style";

interface Props {
  onCategoryClick: (id: number | null) => void;
  onSkillClick: (id: number | null) => void;
  onClickMobileModal?: (state: boolean) => void;
}

function MobileModal({ onCategoryClick, onSkillClick, onClickMobileModal }: Props) {
  const onClickBack = () => {
    if (onClickMobileModal) onClickMobileModal(false);
  };

  return (
    <StyledRoot>
      <CloseCategoryAndSkill>
        <BackButton onClick={onClickBack}>
          <IcCategoryLeftArrowIcon />
          <span>돌아가기</span>
        </BackButton>
      </CloseCategoryAndSkill>
      <ListWrapper>
        <CategoryList onCategoryClick={onCategoryClick} />
        <SkillList onSkillClick={onSkillClick} onClickBack={onClickBack} />
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
