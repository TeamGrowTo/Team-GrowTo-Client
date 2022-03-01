import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const Button = styled.button`
  width: 22.4rem;
  height: 10.8rem;
  font-size: 2.2rem;
  font-family: "Pretendard-SemiBold";
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #f0f8ff 11.58%, #f6fbff 71%);
  border: 0.1rem solid white;
  box-shadow: 0 0.2rem 0.8rem 0.1rem rgba(69, 121, 255, 0.3);
  border-radius: 2.4rem;
  cursor: pointer;

  ${applyMediaQuery("mobile")} {
    width: 9.2rem;
    height: 5.6rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  &:hover {
    background: linear-gradient(0deg, rgba(205, 212, 229, 0.2), rgba(205, 212, 229, 0.2)),
      linear-gradient(180deg, #ffffff 0%, #f0f8ff 11.58%, #f6fbff 71%);
  }

  &:active {
    background: linear-gradient(0deg, rgba(165, 168, 202, 0.2), rgba(165, 168, 202, 0.2)),
      linear-gradient(180deg, #ffffff 0%, #f0f8ff 11.58%, #f6fbff 71%);
  }

  &:focus {
    border: 0.1rem solid ${colors.subBlack};
  }

  & > span {
    color: ${colors.subBlack};
    margin-left: 1.4rem;
    font-family: "Pretendard-SemiBold";
    ${applyMediaQuery("mobile")} {
      margin-left: 0.6rem;
      font-family: "Pretendard-Medium";
    }
  }
`;

export { Button };
