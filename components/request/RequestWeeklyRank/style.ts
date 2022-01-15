import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 40.3rem;

  padding-top: 6.4rem;
  padding-bottom: 10.8rem;
`;

const Wrapper = styled.div`
  width: 128rem;
  height: 100%;
`;

const Title = styled.div`
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 2.8rem;
  }
  p {
    font-family: "Pretendard-Regular";
    font-size: 1.4rem;
  }
`;

const RankList = styled.div``;

export { RankList, StyledRoot, Title, Wrapper };
