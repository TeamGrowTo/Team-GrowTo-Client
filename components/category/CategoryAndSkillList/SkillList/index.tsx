import React from "react";

import { Skill, StyledRoot } from "./style";

interface Props {
  nowSkill: number;
  onSkillClick: (id: number) => void;
}

const dummy = [
  {
    id: 1,
    name: "퍼포먼스&디지털",
  },
  {
    id: 7,
    name: "컨텐츠",
  },
  {
    id: 8,
    name: "데이터분석 Python",
  },
];

const SkillList = function ({ nowSkill, onSkillClick }: Props) {
  return (
    <StyledRoot>
      {dummy.map((skill) => (
        <Skill key={skill.id} onClick={() => onSkillClick(skill.id)}>
          {skill.name}
        </Skill>
      ))}
    </StyledRoot>
  );
};

export default SkillList;
