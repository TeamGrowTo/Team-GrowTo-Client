import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  margin-top: 10.8rem;
  margin-bottom: 12.7rem;

  ${applyMediaQuery("mobile")} {
    margin-top: 4rem;
    margin-bottom: 3.8rem;
  }

  & > h3 {
    font-size: 3.8rem;
    line-height: 4.6rem;
    margin-bottom: 1rem;
    font-family: "Pretendard-ExtraBold";
    color: ${colors.subBlack};

    ${applyMediaQuery("mobile")} {
      font-size: 2rem;
      line-height: 2.4rem;
      font-family: "Pretendard-Bold";
    }
  }

  & > small {
    font-size: 1.8rem;
    color: ${colors.gray5};
    margin-bottom: 5.6rem;
    line-height: 2.2rem;
    font-family: "Pretendard-Regular";

    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
      line-height: 1.4rem;
      margin-bottom: 2.6rem;
    }
  }
`;
