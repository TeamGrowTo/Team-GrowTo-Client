import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.article<{ flagDropdown: boolean; isDropdownBlank: boolean }>`
  display: flex;
  flex-direction: column;
  & > span {
    color: ${colors.gray6};
    font-size: 2rem;
    font-family: "Pretendard-Bold";
    line-height: 2.4rem;
    margin-bottom: 0.8rem;
  }
  & > * {
    width: 50.2rem;
    /* height: 9.2rem; */
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
    cursor: pointer;

    ${({ flagDropdown }) =>
      flagDropdown
        ? css`
            border-radius: 2.8rem 2.8rem 0 0;
          `
        : css`
            border-radius: 4.8rem;
          `}

    & > * {
    }
    span {
      margin-left: 3.2rem;
    }
    svg {
      margin-right: 3.3rem;
      width: 1.8rem;
      height: 1rem;
    }
  }

  & > input {
    border: 0.1rem solid ${colors.gray3};
    border-radius: 4.8rem;
    padding: 1.8rem 3.2rem;
    outline: none;
    color: ${colors.subBlack};
    font-size: 2rem;
    font-family: "Pretendard-Regular";
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
  }

  /* & > input::-webkit-input-placeholder {
    color: ${colors.gray4};
  }
  & > input:-ms-input-placeholder {
    color: ${colors.gray4};
  }
  & > textarea::-webkit-input-placeholder {
    color: ${colors.gray4};
  }
  & > textarea:-ms-input-placeholder {
    color: ${colors.gray4};
  } */
  & > input::placeholder {
    color: ${colors.gray4};
  }
  & > textarea::placeholder {
    color: ${colors.gray4};
  }
`;

export { StyledRoot };
