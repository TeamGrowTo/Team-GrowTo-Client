import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
