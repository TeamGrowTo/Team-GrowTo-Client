import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.article<{ flagDropdown: boolean; isDropdownBlank: boolean }>`
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
  & > * {
    width: 50.2rem;
    ${applyMediaQuery("mobile")} {
      width: 100%;
    }
  }

  & > button {
    border: 0.1rem solid ${colors.gray3};
    color: ${({ isDropdownBlank }) => (isDropdownBlank ? colors.gray4 : colors.subBlack)};
    font-size: 2rem;
    font-family: "Pretendard-Regular";
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6rem;
    padding: 0 3.2rem;
    cursor: pointer;
    ${applyMediaQuery("mobile")} {
      height: 4rem;
      font-size: 1.4rem;
      padding: 0 2.4rem;
    }

    /* &:focus {
      border: 0.1rem solid ${colors.subBlack};
    } */

    ${({ flagDropdown }) =>
      flagDropdown
        ? css`
            border-radius: 2.8rem 2.8rem 0 0;
            svg {
              /* transition: 0.2s; */
              transform: rotate(180deg);
            }
          `
        : css`
            border-radius: 4.8rem;
            /* svg {
              transition: 0.2s;
            } */
          `}
  }

  & > input {
    border: 0.1rem solid ${colors.gray3};
    border-radius: 4.8rem;
    padding: 1.8rem 3.2rem;
    outline: none;
    color: ${colors.subBlack};
    font-size: 2rem;
    font-family: "Pretendard-Regular";
    height: 6rem;
    ${applyMediaQuery("mobile")} {
      height: 4rem;
      padding: 1.1rem 2.4rem;
      font-size: 1.4rem;
    }
  }
  & > input::placeholder {
    color: ${colors.gray4};
  }

  & > textarea {
    border: 0.1rem solid ${colors.gray3};
    border-radius: 2.8rem;
    padding: 2.4rem 3.2rem;
    color: ${colors.subBlack};
    font-size: 2rem;
    font-family: "Pretendard-Regular";
    margin-bottom: 6.7rem;
    height: 18.4rem;
    outline: none;
    resize: none;
    ${applyMediaQuery("mobile")} {
      width: 100%;
      height: 12rem;
      padding: 1.6rem 2.5rem;
      font-size: 1.4rem;
      margin-bottom: 6.4rem;
    }
  }
  & > textarea::placeholder {
    color: ${colors.gray4};
  }
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  & > span {
    color: ${colors.subBlack};
    font-size: 2rem;
    font-family: "Pretendard-Bold";
    line-height: 2.4rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;

export const Error = styled.small`
  font-family: "Pretendard-Regular";
  font-size: 0.8rem;
  color: red;
  margin-left: 0.8rem;
`;
