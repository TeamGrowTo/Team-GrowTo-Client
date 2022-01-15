import styled from "styled-components";
import { colors } from "styles/color";

const LectureTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

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

export { InputWrapper, LectureTypeBox };
