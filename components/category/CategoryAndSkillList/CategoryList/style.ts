import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.article`
  /* z-index: 100; */
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;
  & > * {
    margin-right: 1.6rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 32%;
    height: 100%;
    margin: 0;
    overflow-y: auto;
    background: linear-gradient(
        101.6deg,
        rgba(244, 250, 255, 0.4) 32.93%,
        rgba(255, 255, 255, 0.4) 75.76%
      ),
      #ffffff;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Category = styled.button<{ isSelected: boolean }>`
  width: 16rem;
  height: 6.2rem;
  border-radius: 1.2rem;
  text-align: center;
  font-size: 1.8rem;
  font-family: "Pretendard-SemiBold";
  line-height: 100%;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${colors.mainBlue};
          box-shadow: 0 0.1rem 0.8rem rgba(69, 121, 255, 0.3);
          border: 0.1rem solid ${colors.mainBlue};
          background: ${colors.blue4};
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
            `}
  ${applyMediaQuery("mobile")} {
    border: 0;
    border-radius: 0;
    width: 100%;
    min-height: 4.8rem;
    margin: 0;
    padding-left: 3.9rem;
    font-size: 1.4rem;
    text-align: start;
    ${({ isSelected }) =>
      isSelected
        ? css`
            color: ${colors.mainBlue};
            box-shadow: 0 0.1rem 0.8rem rgba(69, 121, 255, 0.3);
            border: 0.1rem solid ${colors.mainBlue};
            background: ${colors.blue4};
            border-radius: 1.2rem;
          `
        : css`
            color: ${colors.subBlack};
          `}
  }
`;

export { Category, StyledRoot };
