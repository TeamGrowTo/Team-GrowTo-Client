import Link from "next/link";
import { RedirectRequestArrowIcon } from "public/assets/icons";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentSkillState } from "store/state";

import CategoryList from "../CategoryList";
import SkillList from "../SkillList";
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

function DesktopCategoryAndSkillList({ onCategoryClick, onSkillClick }: Props) {
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
              <RedirectRequestArrowIcon />
            </RedirectRequestPage>
          </Link>
        </LinkWrapper>
      </CategoryAndSkillWrapper>
    </StyledRoot>
  );
}

export default DesktopCategoryAndSkillList;
