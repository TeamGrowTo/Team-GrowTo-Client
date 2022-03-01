import React, { useState } from "react";
import Screen from "styles/Screen";

import DesktopCategoryAndSkillList from "./DesktopCategoryAndSkillList";
import MobileCategoryAndSkill from "./MobileCategoryAndSkill";
import MobileModal from "./MobileModal";

interface Props {
  onCategoryClick: (id: number | null) => void;
  onSkillClick: (id: number | null) => void;
}

//모바일과 데스크톱 컴포넌트를 핸들링하는 부분.(선택하는 부분)
function CategoryAndSkillList({ onCategoryClick, onSkillClick }: Props) {
  const [categorySkillMobileModalFlag, setCategorySkillMobileModalFlag] = useState(true);

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
      {/* 모바일은 클릭시 모달창이 떠야하기에 이에 따른 핸들링이 필요했습니다. */}
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
