import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.article`
  display: flex;
  margin-bottom: 1.6rem;
  width: 100%;

  ${applyMediaQuery("mobile")} {
    width: 11.6rem;
    height: 100%;
    margin: 0;
    flex-wrap: nowrap;

    background: linear-gradient(
        101.6deg,
        rgba(244, 250, 255, 0.4) 32.93%,
        rgba(255, 255, 255, 0.4) 75.76%
      ),
      #ffffff;
  }
`;

export const CategoryWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 1.6rem;
  }
  & > *:last-child {
    margin-right: 0;
  }

  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 11.6rem;
    height: 100%;
    align-items: center;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Category = styled.button<{ isSelected: boolean }>`
  width: 16rem;
  height: 6.2rem;
  border-radius: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    border: 0;
    border-radius: 0;
    width: 100%;
    height: 4.8rem;
    min-height: 4.8rem;
    margin: 0;
    display: flex;
    align-items: center;
  }

  &:active {
    background: linear-gradient(0deg, rgba(69, 121, 255, 0.02), rgba(69, 121, 255, 0.02)), #ffffff;
    opacity: 0.96;
    box-shadow: 0 0.1rem 0.8rem rgba(69, 121, 255, 0.3);
    border: 0.1rem solid ${colors.mainBlue};
    color: ${colors.mainBlue};
  }

  &:focus {
    border: 0.1rem solid ${colors.mainBlue};
    border-radius: 1.2rem;
  }

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${colors.mainBlue};
          box-shadow: 0 0.1rem 0.8rem rgba(69, 121, 255, 0.3);
          border: 0.1rem solid ${colors.mainBlue};
          background: ${colors.btnCategoryPressed};
          ${applyMediaQuery("mobile")} {
            border: 0.1rem solid ${colors.mainBlue};
            border-radius: 1.2rem;
          }
        `
      : css`
          color: ${colors.subBlack};
          border: 0.1rem solid ${colors.blue3}};
          background: linear-gradient(
            101.6deg,
              rgba(244, 250, 255, 0.4) 32.93%,
              rgba(255, 255, 255, 0.4) 75.76%
            ),
            #ffffff;
            & > span {

              ${applyMediaQuery("mobile")} {
                /* color: ${colors.subBlack}; */
              }
            }

            &:hover {
                background: linear-gradient(
                101.6deg,
                rgba(244, 250, 255, 0.4) 32.93%,
                rgba(255, 255, 255, 0.4) 75.76%
                ),
                #f4f4f4;
            }
            `}

  & > span {
    font-size: 1.8rem;
    font-family: "Pretendard-SemiBold";
    ${applyMediaQuery("mobile")} {
      width: 3.7rem;
      text-align: start;
      font-size: 1.4rem;
    }
  }
`;
