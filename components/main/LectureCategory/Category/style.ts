import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const Button = styled.a`
  width: 12.5rem;
  height: 16.4rem;
  font-size: 2.2rem;
  font-family: "Pretendard-SemiBold";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;

  ${applyMediaQuery("mobile")} {
    width: 6rem;
    height: 7.8rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  & + & {
    margin-bottom: 1.6rem;
  }

  & > span {
    color: ${colors.subBlack};
    margin-top: 1.6rem;
    font-family: "Pretendard-SemiBold";
    font-size: 2.2rem;

    ${applyMediaQuery("mobile")} {
      margin-top: 0.6rem;
      font-family: "Pretendard-Medium";
      font-size: 1.3rem;
      line-height: 1.6rem;
    }
  }
`;
