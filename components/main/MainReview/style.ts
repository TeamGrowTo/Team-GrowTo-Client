import styled from "styled-components";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 94rem;

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const Wrapper = styled.div`
  width: 101.2rem;
  height: 64rem;
  margin: 15.4rem 0 16.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
