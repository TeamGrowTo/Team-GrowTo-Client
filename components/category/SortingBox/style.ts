import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  width: 100%;
  overflow: auto;
  white-space: nowrap;

  ${applyMediaQuery("mobile")} {
    max-width: 55rem;
  }
`;

export { StyledRoot };
