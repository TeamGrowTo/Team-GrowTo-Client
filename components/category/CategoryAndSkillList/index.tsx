import React, { useState } from "react";
import Screen from "styles/Screen";

import DesktopCategoryAndSkillList from "./DesktopCategoryAndSkillList";
import MobileCategoryAndSkill from "./MobileCategoryAndSkill";
import MobileModal from "./MobileModal";

interface Props {
  onCategoryClick: (id: number | null) => void;
  onSkillClick: (id: number | null) => void;
}

function CategoryAndSkillList({ onCategoryClick, onSkillClick }: Props) {
  const [categorySkillOpenFlag, setCategorySkillOpenFlag] = useState(false);

  const handleCategorySkillOpen = (state: boolean) => {
    setCategorySkillOpenFlag(state);
  };

  return (
    <>
      <Screen desktop>
        <DesktopCategoryAndSkillList
          onCategoryClick={onCategoryClick}
          onSkillClick={onSkillClick}
        />
      </Screen>
      <Screen mobile>
        {categorySkillOpenFlag ? (
          <MobileModal
            onCategoryClick={onCategoryClick}
            onSkillClick={onSkillClick}
            onClickCategorySkill={handleCategorySkillOpen}
          />
        ) : (
          <MobileCategoryAndSkill onClick={handleCategorySkillOpen}></MobileCategoryAndSkill>
        )}
      </Screen>
    </>
  );
}

export default CategoryAndSkillList;
