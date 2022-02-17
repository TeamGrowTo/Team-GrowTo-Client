import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const Dropdown = styled.article<{ flagDropdown: boolean }>`
  position: absolute;
  top: 9.1rem;
  flex-direction: column;
  font-size: 2rem;
  font-family: "Pretendard-Regular";
  color: ${colors.subBlack};
  background-color: white;
  border: 0.1rem solid ${colors.gray3};
  border-radius: 0 0 2.8rem 2.8rem;
  ${applyMediaQuery("mobile")} {
    padding: 1.8rem 2.4rem;
    top: 7rem;
    height: 13.1rem;
  }

  & > button {
    width: 100%;
    height: 5.4rem;
    padding: 0 3.05rem;
    line-height: 5.4rem;
    font-family: "Pretendard-Regular";
    font-size: 2rem;
    text-align: start;
    color: ${colors.subBlack};
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }

    svg {
      width: 1.4rem;
    }
  }
  & > button:first-child {
    height: 5.6rem;
    line-height: 0;
    padding-top: 2.1rem;
    padding-bottom: 1.5rem;
  }
  & > button:last-child {
    height: 5.6rem;
    line-height: 0;
    border-radius: 0 0 2.8rem 2.8rem;
    padding-top: 1.5rem;
    padding-bottom: 2.1rem;
  }
  & > button:focus {
    background: ${colors.blue1};
  }
  & > button:hover {
    cursor: pointer;
    background: ${colors.blue1};
  }

  ${({ flagDropdown }) =>
    flagDropdown
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;
