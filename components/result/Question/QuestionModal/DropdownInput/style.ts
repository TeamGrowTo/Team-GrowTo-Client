import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const Dropdown = styled.article<{ flagDropdown: boolean }>`
  position: absolute;
  top: 9.1rem;
  padding: 2.2rem 3.2rem;
  height: 16.8rem;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2rem;
  font-family: "Pretendard-Regular";
  color: ${colors.subBlack};
  background-color: white;
  border: 0.1rem solid ${colors.gray3};
  border-radius: 0 0 2.8rem 2.8rem;

  ${({ flagDropdown }) =>
    flagDropdown
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  & > button {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-align: start;
  }
  & > button:hover {
    cursor: pointer;
  }
`;

export { Dropdown };
