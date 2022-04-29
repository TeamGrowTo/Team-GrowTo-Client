import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  box-sizing: border-box;
  width: 100vw;
  height: 83.3rem;
  max-width: 100%;
  background-color: ${colors.skyBlue};
  background-image: url("/assets/images/mainReportBackground.png");
  ${applyMediaQuery("mobile")} {
    height: 36.8rem;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  ${applyMediaQuery("mobile")} {
  }
`;

export const Wrapper = styled.article`
  width: 96rem;
  height: 40rem;
  background: rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(4.2rem);
  border: 0.2rem solid #ffffff;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  margin-bottom: 11.7rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 14.6rem;
    border-radius: 1.8rem;
    margin-bottom: 4.7rem;
  }
`;

export const LineWrapper = styled.figure`
  margin-top: 1.4rem;
  ${applyMediaQuery("mobile")} {
    margin-top: 0;
  }
`;
