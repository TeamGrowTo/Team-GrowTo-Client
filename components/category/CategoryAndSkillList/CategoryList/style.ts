import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.article`
  width: 104rem;
  height: 6.2rem;
  display: flex;
  margin-bottom: 1.6rem;
  & > * {
    margin-right: 1.6rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const Category = styled.button<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
  text-align: center;
  font-size: 1.8rem;
  font-family: "Pretendard-Bold";
  //SemiBold로 변경
  line-height: 100%;

  /* &:hover { */
  cursor: pointer;
  /* } */

  ${({ isSelected }) =>
    isSelected
      ? css`
          box-shadow: 0 0.1rem 0.8rem rgba(69, 121, 255, 0.3);
          border: 1px solid ${colors.mainBlue};
          background: #fbfcff;
        `
      : css`
          color: ${colors.subBlack};
          border: 0.1rem solid #bfd8ff;
          background: linear-gradient(
              101.6deg,
              rgba(244, 250, 255, 0.4) 32.93%,
              rgba(255, 255, 255, 0.4) 75.76%
            ),
            #ffffff;
        `}
`;

export { Category, StyledRoot };
