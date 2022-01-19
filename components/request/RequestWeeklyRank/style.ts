import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 40.3rem;

  padding-top: 6.4rem;
  padding-bottom: 10.8rem;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 128rem;
  height: 100%;
`;

const Title = styled.div`
  margin-bottom: 3.6rem;
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 2.8rem;
    margin-bottom: 0.4rem;
  }
  p {
    font-family: "Pretendard-Regular";
    font-size: 1.4rem;
  }
`;

const RankList = styled.div`
  display: flex;
`;

export { RankList, StyledRoot, Title, Wrapper };
