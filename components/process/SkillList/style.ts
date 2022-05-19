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
    /* width: 100%;
    height: 100%;
    margin: 0; */
    /*
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    } */
  }
`;

export const Skill = styled.button<{ isSelected: boolean }>`
  height: 4.8rem;
  margin-right: 0.8rem;
  margin-bottom: 1.2rem;
  padding: 0.7rem 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255, 0.7);
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  color: ${colors.gray6};
  border-radius: 4.8rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? `${colors.mainBlue}` : "white")};
  ${applyMediaQuery("mobile")} {
    padding: 1rem 2rem;
    height: 3.4rem;
    font-size: 1.4rem;
  }
  :hover {
    cursor: pointer;
  }
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;
