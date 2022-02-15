import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
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
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const NotSelectedCategory = styled.article`
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > span {
    color: ${colors.mainBlue};
    font-size: 1.8rem;
    font-family: "Pretendard-Regular";
  }
`;

export const SkillWrapper = styled.div`
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
  font-size: 1.5rem;
  cursor: pointer;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    margin: 0;
    padding: 1.5rem 0;
    padding-left: 2.8rem;
    text-align: start;
    font-size: 1.4rem;
  }

  &:focus {
    color: ${colors.mainBlue};
  }

  &:active {
    border: none;
  }

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${colors.mainBlue};
          font-size: 1.6rem;
          font-family: "Pretendard-SemiBold";
          ${applyMediaQuery("mobile")} {
            background-color: rgba(69, 121, 255, 0.1);
            font-size: 1.4rem;
          }
        `
      : css`
          color: ${colors.subBlack};
          font-family: "Pretendard-Regular";
        `}
`;
