import styled from "styled-components";
import { colors } from "styles/colors";

const LectureTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 3rem;

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const InputWrapper = styled.div`
  width: 63rem;
  height: 6.8rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 4.8rem;
  display: flex;
  padding: 2.2rem 3.6rem;

  input {
    width: 100%;
    font-family: "Pretendard-Regular";
    font-size: 2rem;
  }
  input::placeholder {
    color: ${colors.gray4};
  }
`;

export { InputWrapper, LectureTypeBox };
