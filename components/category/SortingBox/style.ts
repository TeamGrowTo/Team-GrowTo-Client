import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  min-width: 128rem;

  ${applyMediaQuery("mobile")} {
    max-width: 55rem;
  }
`;

export { StyledRoot };
