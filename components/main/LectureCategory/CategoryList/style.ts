import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${applyMediaQuery("mobile")} {
    width: 22.8rem;
  }

  & > * {
    margin-right: 3.6rem;

    ${applyMediaQuery("mobile")} {
      margin-right: 0.8rem;
      margin-bottom: 0.8rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  ${applyMediaQuery("mobile")} {
    width: 5.2rem;
    height: 5.2rem;
  }
`;
