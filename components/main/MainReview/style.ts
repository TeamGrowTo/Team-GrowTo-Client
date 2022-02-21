import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 117.625rem;
  display: flex;
  justify-content: center;
  background-image: url("/assets/images/mainReviewBackground.png");

  ${applyMediaQuery("mobile")} {
    height: 65.4rem;
    background-image: url("/assets/images/mainReviewBackground-mobile.png");
  }
`;

export const Wrapper = styled.article`
  width: 126.5rem;
  height: 80rem;
  margin-top: 17rem;
  margin-bottom: 20.625rem;

  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 53.6rem;
    margin-top: 5rem;
    margin-bottom: 6.8rem;
  }
`;

export const Title = styled.div`
  margin-bottom: 8.75rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 3rem;
  }
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 5rem;
    margin-bottom: 2rem;
    color: ${colors.white};
    ${applyMediaQuery("mobile")} {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }
  hgroup {
    font-family: "Pretendard-Regular";
    font-size: 2.25rem;
    color: ${colors.gray2};
    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
    }
  }
`;

export const ReviewList = styled.section`
  display: flex;
  flex-flow: row wrap;
  /* width: 120rem; */

  ${applyMediaQuery("mobile")} {
    display: flex;
    flex-direction: column wrap;
    width: 33.6rem;
  }
`;
