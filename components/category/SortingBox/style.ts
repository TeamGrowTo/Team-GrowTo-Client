import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  display: inline-flex;
  ${applyMediaQuery("mobile")} {
    max-width: 37rem;
    min-width: 30rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    & > * {
      margin-right: 0.4rem;
      margin-bottom: 0.4rem;
    }
    & > *:last-child {
      margin-right: 0;
    }
  }
`;
