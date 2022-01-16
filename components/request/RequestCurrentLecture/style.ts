import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 41.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 2.8rem;
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

const CurrentList = styled.div`
  display: flex;
  justify-content: center;
`;

export { CurrentList, StyledRoot, Title, Wrapper };
