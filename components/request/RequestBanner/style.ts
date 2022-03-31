import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 19.2rem;
  background-color: ${colors.subOrange};
  background-image: url("/assets/images/requestBannerBackground.png");
  display: flex;
  justify-content: center;
  align-items: center;

  ${applyMediaQuery("mobile")} {
    height: 13.6rem;
    background-image: url("/assets/images/requestBannerBackground-mobile.png");
  }
`;

export const Wrapper = styled.div`
  width: 69.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    width: 29.4rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    line-height: 5rem;
    color: ${colors.white};
    display: flex;

    ${applyMediaQuery("mobile")} {
      font-size: 2.2rem;
      line-height: 2.8rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  strong {
    color: ${colors.mainBlue};
  }

  div {
    display: flex;
  }
`;
