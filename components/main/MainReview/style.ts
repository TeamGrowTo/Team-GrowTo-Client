import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 94.1rem;
  display: flex;
  justify-content: center;
  background-image: url("/assets/images/mainReviewBackground.png");
`;

const Wrapper = styled.div`
  width: 101.2rem;
  height: 64rem;
  margin-top: 13.6rem;
  margin-bottom: 16.5rem;
`;

const Title = styled.div`
  margin-bottom: 7rem;
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    margin-bottom: 1.6rem;
    color: ${colors.white};
  }
  p {
    font-family: "Pretendard-Regular";
    font-size: 1.8rem;
    color: ${colors.gray2};
  }
`;

const ReviewList = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 120rem;
`;

export { ReviewList, StyledRoot, Title, Wrapper };
