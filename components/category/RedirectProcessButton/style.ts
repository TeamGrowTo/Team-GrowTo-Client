import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.header`
  position: fixed;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  color: white;
  background: linear-gradient(90deg, #a484fe 30.96%, #5c00f1 97.53%);

  ${applyMediaQuery("desktop")} {
    top: 10.8rem;
  }
  ${applyMediaQuery("mobile")} {
    bottom: 0;
    font-size: 1.2rem;
  }
`;

export const Content = styled.article`
  max-width: 108.9rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 4.6rem;
  ${applyMediaQuery("mobile")} {
    left: 0;
    padding: 0 1.6rem;
    margin-right: 0;
  }
`;

export const Description = styled.h3`
  color: white;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Bold";
  & > svg {
    margin-right: 1.6rem;
  }
`;

export const RedirectButton = styled.a`
  width: 16.8rem;
  height: 3.6rem;
  line-height: 3.6rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2rem;

  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      margin-left: 0.8rem;
    }
  }

  ${applyMediaQuery("mobile")} {
    width: 9.8rem;
    height: 3.6rem;
  }
`;
