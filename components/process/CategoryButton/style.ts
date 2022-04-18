import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
export const StyledRoot = styled.button`
  width: 13.2rem;
  height: 12.7rem;
  border-radius: 2.8rem;
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  color: ${colors.subBlack};
  background-color: rgba(255, 255, 255, 0.7);
  margin-right: 2rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.6rem;
    width: 22rem;
    height: 7.2rem;
    margin: 0.8rem 6rem;
  }
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;
