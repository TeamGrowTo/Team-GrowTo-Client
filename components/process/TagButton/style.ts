import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.button<{ isClicked: boolean }>`
  height: 4.8rem;
  margin-right: 0.8rem;
  margin-bottom: 1.2rem;
  padding: 0.7rem 3.2rem;
  background: ${({ isClicked }) => (isClicked ? `${colors.mainBlue}` : "white")};
  opacity: 2;
  font-family: "Pretendard-Bold";
  color: ${({ isClicked }) => (isClicked ? "white" : `${colors.gray6}`)};
  border-radius: 4.8rem;
`;
