import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  ${applyMediaQuery("mobile")} {
    max-width: 55rem;
    height: 9rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export { StyledRoot };
