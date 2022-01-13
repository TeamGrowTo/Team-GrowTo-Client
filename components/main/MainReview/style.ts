import styled from "styled-components";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 94rem;
  padding-top: 13.6rem;
  padding-bottom: 16.2rem;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 101.2rem;
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
`;

export { ReviewList, StyledRoot, Title, Wrapper };
