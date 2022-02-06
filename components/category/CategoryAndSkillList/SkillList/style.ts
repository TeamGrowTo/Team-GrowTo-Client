import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  ${applyMediaQuery("desktop")} {
    width: 100%;
    height: 13rem;
  }
  z-index: 100;
  background: #f4f9ff;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  ${applyMediaQuery("mobile")} {
    height: 100%;
    width: 100%;
    margin: 0;
    border-radius: 0;
    /* overflow-y: auto; */
  }
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
  ${applyMediaQuery("mobile")} {
    padding-top: 2rem;
    width: 100%;
    height: 100%;
    margin: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Skill = styled.button<{ isSelected: boolean }>`
  font-size: 1.5rem;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${colors.mainBlue};
          font-size: 1.6rem;
          font-family: "Pretendard-SemiBold";
        `
      : css`
          color: ${colors.subBlack};
          font-family: "Pretendard-Regular"; ;
        `}
  ${applyMediaQuery("mobile")} {
    width: 100%;
    margin: 0;
    margin-bottom: 3.2rem;
    padding: 0;
    padding-left: 2.8rem;
    text-align: start;
    font-size: 1.4rem;
  }
`;

export { NotSelectedCategory, Skill, SkillWrapper, StyledRoot };
