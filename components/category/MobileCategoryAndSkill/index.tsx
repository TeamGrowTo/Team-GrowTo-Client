import Image from "next/image";
import { MobileCategory, MobileCategoryTab } from "public/assets/images";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState } from "store/state";

import { Category, Skill, StyledRoot } from "./style";

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
        <MobileCategory />
        <div></div>
        <text>
          {currentCategory && currentCategory?.categoryName !== ""
            ? currentCategory?.categoryName
            : "분야"}
        </text>
      </Category>
      <Skill>
        {currentSkill && currentSkill?.skillName !== "" ? currentSkill?.skillName : "스킬"}
      </Skill>
    </StyledRoot>
  );
}

export default MobileCategoryAndSkill;
