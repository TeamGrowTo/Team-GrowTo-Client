import React from "react";

import { NotSelectedCategory, Skill, SkillWrapper, StyledRoot } from "./style";

interface Props {
  nowCategory: number;
  nowSkill: number;
  onSkillClick: (id: number) => void;
}

const dummy = [
  {
    id: 1,
    name: "퍼포먼스&디지털",
  },
  {
    id: 2,
    name: "컨텐츠",
  },
  {
    id: 3,
    name: "FB&IG",
  },
  {
    id: 4,
    name: "GA&GA4",
  },
  {
    id: 5,
    name: "검색(SEO, SEM)",
  },
  {
    id: 6,
    name: "데이터분석 Python",
  },
  {
    id: 7,
    name: "퍼포먼스&디지털",
  },
  {
    id: 8,
    name: "퍼포먼스&디지털",
  },
  {
    id: 9,
    name: "퍼포먼스&디지털",
  },

  {
    id: 10,
    name: "퍼포먼스&디지털",
  },
  {
    id: 11,
    name: "컨텐츠",
  },
  {
    id: 12,
    name: "데이터분석 Python",
  },
];

const SkillList = function ({ nowCategory, nowSkill, onSkillClick }: Props) {
  return (
    <StyledRoot>
      {nowCategory === -1 ? (
        <NotSelectedCategory>강의 분야 {">"} 세부 분야를 선택해주세요</NotSelectedCategory>
      ) : (
        <SkillWrapper>
          {dummy.map((skill) => (
            <Skill
              key={skill.id}
              isSelected={nowSkill === skill.id}
              onClick={() => onSkillClick(skill.id)}
            >
              {skill.name}
            </Skill>
          ))}
        </SkillWrapper>
      )}
    </StyledRoot>
  );
};

export default SkillList;
