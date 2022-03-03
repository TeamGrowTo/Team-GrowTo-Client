import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40.3rem;
  padding-top: 6.4rem;
  padding-bottom: 10.8rem;

  display: flex;
  justify-content: center;
  ${applyMediaQuery("mobile")} {
    height: 41.1rem;
    padding-top: 3.2rem;
    padding-bottom: 3rem;
  }
`;

export const Wrapper = styled.div`
  width: 128rem;
  height: 100%;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    margin-left: 1.6rem;
  }
`;

export const Title = styled.div`
  margin-bottom: 3.6rem;
  color: ${colors.subBlack};
  ${applyMediaQuery("mobile")} {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-family: "Pretendard-Bold";
    font-size: 2.8rem;
    margin-bottom: 0.4rem;
    ${applyMediaQuery("mobile")} {
      font-size: 2rem;
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

export const RankList = styled.div`
  display: flex;
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
  }
`;
