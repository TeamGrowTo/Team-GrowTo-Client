import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #7878c8 0%, #401a93 100%);
  overflow: hidden;
`;

export const ComparisonImgWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 5.5rem;
  ${applyMediaQuery("mobile")} {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 1.2rem;
  margin-top: 4.8rem;
  ${applyMediaQuery("mobile")} {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
`;

export const ResultCardWrapper = styled.section<{ resultDataCount: number }>`
  display: flex;
  justify-content: center;
  margin-top: 3.1rem;
  ${applyMediaQuery("mobile")} {
    margin-top: 1.6rem;
  }
  & > * {
    ${({ resultDataCount }) =>
      resultDataCount === 3
        ? css`
            margin-right: 1.9rem;
          `
        : css`
            margin-right: 2rem;
          `}
  }
  & > *:last-child {
    margin-right: 0;
  }
`;
