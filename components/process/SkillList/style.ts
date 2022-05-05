import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  ${applyMediaQuery("desktop")} {
    width: 100%;
  }
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.8rem;

  ${applyMediaQuery("mobile")} {
    background: #f4f9ff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
`;

export const NotSelectedCategory = styled.article`
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
    line-height: 2.2rem;
    display: flex;
    padding: 2.9rem 2.8rem 0;
    text-align: left;
  }

  & > span {
    color: ${colors.mainBlue};
    font-size: 1.8rem;
    font-family: "Pretendard-Medium";
  }
`;

export const SkillWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
  ${applyMediaQuery("mobile")} {
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

export const Skill = styled.button<{ isSelected: boolean }>`
  height: 4.8rem;
  margin-right: 0.8rem;
  margin-bottom: 1.2rem;
  padding: 0.7rem 3.2rem;
  background: rgb(255, 255, 255, 0.7);
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  color: ${colors.gray6};
  border-radius: 4.8rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? `${colors.mainBlue}` : "white")};
  ${applyMediaQuery("mobile")} {
    padding: 1.1rem 2rem;
    height: 4rem;
    font-size: 1.4rem;
  }
  :hover {
    cursor: pointer;
  }
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;
