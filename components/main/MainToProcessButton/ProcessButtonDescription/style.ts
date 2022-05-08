import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const Description = styled.aside`
  font-size: 1.7rem;
  font-family: "Pretendard-Medium";
  line-height: 2rem;
  margin: 0;

  ${applyMediaQuery("mobile")} {
    width: 14rem;
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
`;

export const Highlight = styled.strong`
  font-size: 2rem;
  font-family: "Pretendard-Bold";
  line-height: 2.4rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.3rem;
    line-height: 1.7rem;
  }
`;
