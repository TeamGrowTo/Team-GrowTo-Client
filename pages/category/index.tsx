import CategoryAndSkillList from "components/category/CategoryAndSkillList";
import React, { useState } from "react";

const Category = function () {
  const [nowCategory, setNowCategory] = useState(-1);
  const [nowSkill, setNowSkill] = useState(-1);

  const handleCategoryClick = (id: number) => {
    setNowCategory(id);
  };

  const handleSkillClick = (id: number) => {
    setNowSkill(id);
  };

  return (
    <div>
      <CategoryAndSkillList
        nowCategory={nowCategory}
        nowSkill={nowSkill}
        onCategoryClick={handleCategoryClick}
        onSkillClick={handleSkillClick}
      />
    </div>
  );
};

export default Category;
