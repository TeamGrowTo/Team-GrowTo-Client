import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  ${applyMediaQuery("desktop")} {
    width: 100%;
    /* height: 13rem; */
  }
  z-index: 100;
  /* border-radius: 1.6rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.8rem;
  /* padding: 3.2rem 4.8rem; */

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
  /* height: 6.6rem; */
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
  font-size: 1.8rem;
  font-family: "Pretendard-Medium";
  color: ${colors.gray7};
  padding: 1.2rem 1.7rem;
  background-color: ${colors.gray0};
  border-radius: 4rem;
  cursor: pointer;

  ${applyMediaQuery("mobile")} {
    width: 100%;
    margin: 0;
    padding: 1.5rem 0;
    padding-left: 2.8rem;
    text-align: start;
    font-size: 1.4rem;
    background-color: #f4f9ff;
    border-radius: 0;
  }

  /* &:focus {
    color: ${colors.mainBlue};
  } */

  &:active {
    border: none;
  }

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: white;
          background-color: ${colors.mainBlue};
          font-size: 1.8rem;
          font-family: "Pretendard-Bold";
          ${applyMediaQuery("mobile")} {
            color: ${colors.mainBlue};
            background-color: rgba(69, 121, 255, 0.1);
            font-size: 1.4rem;
          }
        `
      : css`
          color: ${colors.subBlack};
          font-family: "Pretendard-Medium";
        `}
`;
