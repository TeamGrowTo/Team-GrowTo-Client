import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
export const StyledRoot = styled.button<{ isClicked: boolean }>`
  height: 4.8rem;
  margin-right: 0.8rem;
  margin-bottom: 1.2rem;
  padding: 0.7rem 3.2rem;
  background: ${({ isClicked }) => (isClicked ? `${colors.mainBlue}` : "rgb(255, 255, 255, 0.7)")};
  opacity: 2;
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  color: ${({ isClicked }) => (isClicked ? "white" : `${colors.gray6}`)};
  border-radius: 4.8rem;
  border: 1px solid ${({ isClicked }) => (isClicked ? `${colors.mainBlue}` : "white")};
  ${applyMediaQuery("mobile")} {
    padding: 1.3rem 2rem;
    height: 4rem;
    font-size: 1.4rem;
  }
  :hover {
    cursor: pointer;
  }
`;
