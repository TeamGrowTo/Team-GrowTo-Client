import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.section`
  width: 100%;
  height: 13rem;
  background: #f4f9ff;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotSelectedCategory = styled.span`
  color: ${colors.mainBlue};
  font-size: 1.8rem;
  font-family: "Pretendard-Regular";
`;

const SkillWrapper = styled.div`
  width: 118.4rem;
  height: 6.6rem;
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 4.4rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const Skill = styled.button<{ isSelected: boolean }>`
  font-size: 1.5rem;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${colors.mainBlue};
          font-family: "Pretendard-SemiBold";
        `
      : css`
          color: ${colors.subBlack};
          font-family: "Pretendard-Regular"; ;
        `}
`;

export { NotSelectedCategory, Skill, SkillWrapper, StyledRoot };
