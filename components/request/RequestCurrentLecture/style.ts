import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 41.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${applyMediaQuery("mobile")} {
    padding: 3.1rem 1.6rem 4rem;
    flex-wrap: wrap;
  }
`;

const Wrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 2.8rem;
  color: ${colors.subBlack};
  ${applyMediaQuery("mobile")} {
    margin-bottom: 1.2rem;
  }
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 2.8rem;
    margin-bottom: 0.4rem;
    ${applyMediaQuery("mobile")} {
      color: ${colors.gray6};
      font-size: 2rem;
      margin-bottom: 0.3rem;
    }
  }
  p {
    font-family: "Pretendard-Regular";
    font-size: 1.4rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
    }
  }
`;

const CurrentList = styled.div`
  display: flex;
  justify-content: center;

  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    flex-flow: wrap;
    width: 34rem;
  }
`;

export { CurrentList, StyledRoot, Title, Wrapper };
