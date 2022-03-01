import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  display: flex;
  margin-bottom: 0.8rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 0.4rem;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 9.6rem;
    font-size: 2rem;
    ${applyMediaQuery("mobile")} {
      height: 7.8rem;
      font-size: 1.6rem;
    }
  }
`;

export const InfoName = styled.ul`
  margin-right: 2.95rem;
  color: ${colors.subBlack};
  font-family: "Pretendard-Regular";
  ${applyMediaQuery("mobile")} {
    margin-right: 2.4rem;
  }
`;

export const InfoData = styled.ul`
  color: ${colors.subBlack};
  font-family: "Pretendard-Bold";
`;
