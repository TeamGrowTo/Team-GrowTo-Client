import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.button<{ isClicked: boolean }>`
  width: 22rem;
  height: 18rem;
  border-radius: 2.8rem;
  font-family: "Pretendard-Bold";
  font-size: 2.4rem;
  color: ${colors.subBlack};
  background-color: rgba(255, 255, 255, 0.7);
  margin: 6.8rem 1.8rem 0;
  color: ${({ isClicked }) => (isClicked ? "white" : `${colors.gray6}`)};
  background: ${({ isClicked }) => (isClicked ? `${colors.mainBlue}` : "white")};
`;
