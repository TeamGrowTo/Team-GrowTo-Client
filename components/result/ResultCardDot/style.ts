import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2rem;
  background-color: white;
  padding-top: 1.2rem;
  & > * {
    margin-right: 0.8rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export const Dot = styled.article<{ isSelected: boolean }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  ${({ isSelected }) =>
    isSelected ? `background-color: ${colors.mainBlue}` : `background-color: ${colors.gray2}`}
`;
