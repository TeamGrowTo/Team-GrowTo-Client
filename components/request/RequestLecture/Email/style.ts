import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
// 어떡하면 같은 css가 들어가는 걸 훅으로 묶을 수 있을지 생각해봅시다

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 5.5rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 5.2rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${colors.gray6};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 78.75rem;
  height: 8.5rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 6rem;
  border: 0.125rem solid ${colors.white};
  display: flex;
  align-items: center;
  padding: 2.75rem 4.5rem;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4rem;
    padding: 1.15rem 2.4rem;
  }

  & > input {
    width: 100%;
    font-family: "Pretendard-Regular";
    font-size: 2.5rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
  & > input::placeholder {
    color: ${colors.gray4};
  }
`;
