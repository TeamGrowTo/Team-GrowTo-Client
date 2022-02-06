import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState, lectureSkillState } from "store/state";

import { NotSelectedCategory, Skill, SkillWrapper, StyledRoot } from "./style";

interface Props {
  onSkillClick: (id: number | null) => void;
}

function SkillList({ onSkillClick }: Props) {
  const skillList = useRecoilValue(lectureSkillState);
  const currentCategory = useRecoilValue(currentCategoryState);
  const currentSkill = useRecoilValue(currentSkillState);

  return (
    <StyledRoot>
      {!currentCategory || currentCategory?.id === -1 ? (
        <NotSelectedCategory>강의 분야 {">"} 세부 분야를 선택해주세요</NotSelectedCategory>
      ) : (
        <SkillWrapper>
          {skillList?.map((skill) => (
            <Skill
              key={skill.id}
              isSelected={currentSkill?.id === skill.id}
              onClick={() => onSkillClick(skill.id)}
            >
              {skill.skillName}
            </Skill>
          ))}
        </SkillWrapper>
      )}
    </StyledRoot>
  );
}

export default SkillList;
