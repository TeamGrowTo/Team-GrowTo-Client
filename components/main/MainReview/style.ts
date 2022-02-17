import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 94.1rem;
  display: flex;
  justify-content: center;
  background-image: url("/assets/images/mainReviewBackground.png");

  ${applyMediaQuery("mobile")} {
    height: 65.4rem;
    background-image: url("/assets/images/mainReviewBackground-mobile.png");
  }
`;

const Wrapper = styled.article`
  width: 101.2rem;
  height: 64rem;
  margin-top: 13.6rem;
  margin-bottom: 16.5rem;

  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 53.6rem;
    margin-top: 5rem;
    margin-bottom: 6.8rem;
  }
`;

const Title = styled.div`
  margin-bottom: 7rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 3rem;
  }
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    margin-bottom: 1.6rem;
    color: ${colors.white};
    ${applyMediaQuery("mobile")} {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }
  p {
    font-family: "Pretendard-Regular";
    font-size: 1.8rem;
    color: ${colors.gray2};
    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
    }
  }
`;

const ReviewList = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 120rem;

  ${applyMediaQuery("mobile")} {
    display: flex;
    flex-direction: column wrap;
    width: 33.6rem;
  }
`;

export { ReviewList, StyledRoot, Title, Wrapper };
