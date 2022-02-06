import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  margin-top: 10.4rem;
  margin-bottom: 11.4rem;
  ${applyMediaQuery("mobile")} {
    margin-top: 4rem;
    margin-bottom: 5.2rem;
  }

  & > h3 {
    font-size: 3.8rem;
    line-height: 4.6rem;
    margin-bottom: 1rem;
    font-family: "Pretendard-ExtraBold";
    color: ${colors.subBlack};
    ${applyMediaQuery("mobile")} {
      font-size: 1.8rem;
      line-height: 1rem;
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
      margin-bottom: 2rem;
    }
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 75rem;
  flex-wrap: wrap;
  ${applyMediaQuery("mobile")} {
    width: 30.2rem;
  }

  & > * {
    margin-right: 2rem;
    margin-bottom: 2.2rem;
    ${applyMediaQuery("mobile")} {
      margin-right: 0.8rem;
      margin-bottom: 0.8rem;
    }
  }
  & > *:nth-child(3n) {
    margin-right: 0;
  }
  & > *:last-child {
    margin: 0;
  }
`;

export { CategoryWrapper, StyledRoot };
