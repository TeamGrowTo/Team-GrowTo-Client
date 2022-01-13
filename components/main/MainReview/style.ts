import styled from "styled-components";

const StyledRoot = styled.div`
  width: 100%;
  height: 94rem;
  padding-top: 13.6rem;
  padding-bottom: 16.2rem;

  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
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

const Title = styled.header``;

const ReviewList = styled.div``;

export { ReviewList, StyledRoot, Title, Wrapper };
