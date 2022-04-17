import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const CategoryWrapper = styled.div`
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
`;
