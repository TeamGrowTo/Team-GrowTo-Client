import styled from "styled-components";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 95.8rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 101.2rem;
  height: 64rem;
  margin-top: 15.4rem;
  margin-bottom: 16.4rem;
`;

const Title = styled.div`
  margin-bottom: 7.3rem;
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    margin-bottom: 1.4rem;
  }
  p {
    font-family: "Pretendard-Regular";
    font-size: 1.4rem;
    color: #a4a4a4;
  }
`;

const ReviewList = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 120rem;
`;

export { ReviewList, StyledRoot, Title, Wrapper };
