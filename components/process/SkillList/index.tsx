import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState, lectureSkillState } from "store/state";

import { NotSelectedCategory, Skill, SkillWrapper, StyledRoot } from "./style";

interface Props {
  onSkillClick: (id: number | null) => void;
  onClickBack?: () => void;
}

function SkillList({ onSkillClick, onClickBack }: Props) {
  const skillList = useRecoilValue(lectureSkillState);
  const currentCategory = useRecoilValue(currentCategoryState);
  const currentSkill = useRecoilValue(currentSkillState);

  const handleSkillClick = (id: number | null) => {
    onSkillClick(id);
    if (onClickBack) onClickBack();
  };

  return (
    <StyledRoot>
      <SkillWrapper>
        {skillList?.map((skill) => (
          <Skill
            key={skill.id}
            isSelected={currentSkill?.id === skill.id}
            onClick={() => handleSkillClick(skill.id)}
          >
            {skill.skillName}
          </Skill>
        ))}
      </SkillWrapper>
    </StyledRoot>
  );
}

export default SkillList;
