import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  display: inline-flex;
  ${applyMediaQuery("mobile")} {
    max-width: 55rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2.2rem;
  }
`;

export const SortingWrapper = styled.div`
  ${applyMediaQuery("mobile")} {
    max-width: 32.8rem;
    min-width: 30rem;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-around;
    flex-direction: row;
    height: 100%;

    & > * {
      margin-right: 0.6rem;
      margin-bottom: 0.6rem;
    }

    & > *:last-child {
      margin-right: 0;
    }
  }
`;
