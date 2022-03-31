import { MobileCategoryTab } from "public/assets/images";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState } from "store/state";

import { Category, ImageWrapper, Skill, StyledRoot } from "./style";

interface Props {
  onClick: (state: boolean) => void;
}

function MobileCategoryAndSkill({ onClick }: Props) {
  const currentCategory = useRecoilValue(currentCategoryState);
  const currentSkill = useRecoilValue(currentSkillState);

  return (
    <StyledRoot
      onClick={() => {
        onClick(true);
      }}
    >
      <Category>
        <span>
          {currentCategory && currentCategory?.categoryName !== ""
            ? currentCategory?.categoryName
            : "강의 분야"}
        </span>
        <ImageWrapper>
          <MobileCategoryTab />
        </ImageWrapper>
      </Category>
      <Skill>
        {currentSkill && currentSkill?.skillName !== "" ? currentSkill?.skillName : "세부 선택"}
      </Skill>
    </StyledRoot>
  );
}

export default MobileCategoryAndSkill;
