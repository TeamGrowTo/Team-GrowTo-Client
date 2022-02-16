import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const Dropdown = styled.article<{ flagDropdown: boolean }>`
  position: absolute;
  top: 9.1rem;
  /* padding: 2.2rem 3.2rem; */
  /* height: 16.8rem; */
  flex-direction: column;
  /* justify-content: space-between; */
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
    /* text-align: center; */
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
  & > button:focus {
    border: 0.1rem solid ${colors.subBlack};
  }
  & > button:hover {
    cursor: pointer;
    background: ${colors.blue1};
  }
  & > button:first-child {
    height: 5.6rem;
    line-height: 0;
  }
  & > button:last-child {
    height: 5.6rem;
    line-height: 0;
    border-radius: 0 0 2.8rem 2.8rem;
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
