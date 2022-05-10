import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  display: flex;
  margin-bottom: 2rem;

  ${applyMediaQuery("mobile")} {
    margin-bottom: 1.2rem;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 12.8rem;
    font-size: 2rem;

    ${applyMediaQuery("mobile")} {
      height: 10.4rem;
      font-size: 1.6rem;
    }
  }
`;

export const InfoName = styled.ul`
  margin-right: 1.6rem;

  ${applyMediaQuery("mobile")} {
    margin-right: 1.6rem;
  }

  & > li {
    width: 2.4rem;
    height: 2.4rem;

    ${applyMediaQuery("mobile")} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const InfoData = styled.ul`
  color: ${colors.mildBlack};
  font-family: "Pretendard-Medium";

  & > li {
    font-size: 2rem;

    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;
