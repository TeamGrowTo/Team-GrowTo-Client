import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  margin: -1rem;
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  ${applyMediaQuery("mobile")} {
    margin-top: 2.4rem;
    justify-content: center;
  }
`;

const ImgWrapper = styled.figure`
  display: flex;
  margin: auto;
  width: 30rem;
  height: 28rem;
  ${applyMediaQuery("mobile")} {
    width: 20rem;
    height: auto;
  }
`;

export { ImgWrapper, StyledRoot };
