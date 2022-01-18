import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  position: relative;
  display: flex;
  height: 4rem;
  margin-top: 8.2rem;
  align-items: center;
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
`;
export const ProcessTitle = styled.h2`
  font-family: "Pretendard-Bold";
  font-size: 4rem;
  position: absolute;
  left: calc(50% - 12.5rem);
  ${applyMediaQuery("mobile")} {
    font-size: 2.2rem;
    left: calc(50% - 6rem);
  }
`;
