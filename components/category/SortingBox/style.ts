import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  display: inline-flex;
  ${applyMediaQuery("mobile")} {
    display: block;
    width: 100%;
    height: 16rem;
    white-space: nowrap;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    max-width: 37rem;
    min-width: 30rem;
    & > * {
      margin-right: 0.4rem;
      margin-bottom: 0.4rem;
    }
    & > *:last-child {
      margin-right: 0;
    }
  }
`;
