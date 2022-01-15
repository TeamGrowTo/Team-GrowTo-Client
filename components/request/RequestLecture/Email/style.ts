import styled from "styled-components";
import { colors } from "styles/color";
// 어떡하면 같은 css가 들어가는 걸 훅으로 묶을 수 있을지 생각해봅시다

const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 4.4rem;

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const InputWrapper = styled.div`
  width: 63rem;
  height: 6.8rem;
  background-color: ${colors.gray2};
  border-radius: 4.8rem;
  display: flex;
  padding: 2.2rem 3.6rem;

  input {
    width: 100%;
    font-family: "Pretendard-Regular";
    font-size: 2rem;
  }
  input::placeholder {
  }
`;

export { EmailBox, InputWrapper };
