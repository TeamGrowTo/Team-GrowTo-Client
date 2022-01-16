import React from "react";
import { useRecoilValue } from "recoil";
import { lectureSkillState } from "store/state";

import { NotSelectedCategory, Skill, SkillWrapper, StyledRoot } from "./style";

interface Props {
  nowCategory: number;
  nowSkill: number;
  onSkillClick: (id: number | null) => void;
}

const SkillList = function ({ nowCategory, nowSkill, onSkillClick }: Props) {
  const skillList = useRecoilValue(lectureSkillState);

  return (
    <StyledRoot>
      {nowCategory === -1 ? (
        <NotSelectedCategory>강의 분야 {">"} 세부 분야를 선택해주세요</NotSelectedCategory>
      ) : (
        <SkillWrapper>
          {skillList?.map((skill) => (
            <Skill
              key={skill.id}
              isSelected={nowSkill === skill.id}
              onClick={() => onSkillClick(skill.id)}
            >
              {skill.skillName}
            </Skill>
          ))}
        </SkillWrapper>
      )}
    </StyledRoot>
  );
};

export default SkillList;
