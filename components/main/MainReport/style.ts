import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  box-sizing: border-box;
  width: 100vw;
  height: 75.375rem;
  max-width: 100%;
  background-color: ${colors.skyBlue};
  background-image: url("/assets/images/mainReportBackground.png");
  display: flex;
  justify-content: center;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    height: 22.6rem;
  }
`;

export const Wrapper = styled.article`
  width: 120rem;
  height: 50rem;
  background: rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(5.25rem);
  border: 0.25rem solid #ffffff;
  border-radius: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 14.6rem;
    border-radius: 1.8rem;
  }
`;

export const LineWrapper = styled.figure`
  margin-top: 1.75rem;
  ${applyMediaQuery("mobile")} {
    margin-top: 0;
  }
`;
