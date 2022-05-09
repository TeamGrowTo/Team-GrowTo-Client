import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    margin-right: 3.6rem;

    ${applyMediaQuery("mobile")} {
      margin-right: 0.8rem;
      margin-bottom: 0.8rem;
    }
  }
  & > *:last-child {
    margin: 0;
  }
  ${applyMediaQuery("mobile")} {
    & > *:nth-child(3) {
      margin: 0;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  ${applyMediaQuery("mobile")} {
    width: 2.6rem;
    height: 2.6rem;
  }
`;
