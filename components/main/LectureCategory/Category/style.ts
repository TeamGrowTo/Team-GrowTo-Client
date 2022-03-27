import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const Button = styled.a`
  font-size: 2.2rem;
  font-family: "Pretendard-SemiBold";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;

  ${applyMediaQuery("mobile")} {
    width: 9.2rem;
    height: 5.6rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  & > div {
    width: 9.7rem;
    height: 9.7rem;
  }

  & > span {
    color: ${colors.subBlack};
    margin-top: 1.6rem;
    font-family: "Pretendard-SemiBold";
    font-size: 2.2rem;
    ${applyMediaQuery("mobile")} {
      font-family: "Pretendard-Medium";
    }
  }
`;

export { Button };
