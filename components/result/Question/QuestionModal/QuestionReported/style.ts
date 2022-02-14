import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard-Bold";
  color: ${colors.gray4};
  ${applyMediaQuery("mobile")} {
    justify-content: center;
  }
  & > div {
    color: ${colors.subOrange};
    font-size: 3.2rem;
    margin-top: 20rem;
    margin-bottom: 1rem;
    ${applyMediaQuery("mobile")} {
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
  }
  & > p {
    font-size: 2.8rem;
    text-align: center;
    line-height: 4rem;
    margin-bottom: 14.6rem;
    ${applyMediaQuery("mobile")} {
      width: 22rem;
      line-height: 3rem;
      font-size: 2rem;
      margin: 0;
    }
  }
  & > button {
    position: absolute;
    bottom: 5.4rem;
    background: ${colors.mainBlue};
    border-radius: 4.8rem;
    width: 39.8rem;
    height: 6rem;
    text-align: center;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    ${applyMediaQuery("mobile")} {
      bottom: 1.6rem;
      width: 29.6rem;
      height: 4.8rem;
      font-size: 1.6rem;
    }

    &:focus {
      border: 0.1rem solid ${colors.subBlack};
    }
  }
`;

export const Highlight = styled.span`
  color: ${colors.subBlack};
`;
