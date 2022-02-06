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
  const [categorySkillMobileModalFlag, setCategorySkillMobileModalFlag] = useState(false);

  const handleCategorySkillMobileModal = (state: boolean) => {
    setCategorySkillMobileModalFlag(state);
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
        {categorySkillMobileModalFlag ? (
          <MobileModal
            onCategoryClick={onCategoryClick}
            onSkillClick={onSkillClick}
            onClickMobileModal={handleCategorySkillMobileModal}
          />
        ) : (
          <MobileCategoryAndSkill onClick={handleCategorySkillMobileModal} />
        )}
      </Screen>
    </>
  );
}

export default CategoryAndSkillList;
