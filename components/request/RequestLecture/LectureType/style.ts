import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const LectureTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 2.8rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 2rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    margin-bottom: 0.8rem;
    color: ${colors.gray6};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 63rem;
  height: 6.8rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 4.8rem;
  border: 0.1rem solid ${colors.white};
  display: flex;
  padding: 2.2rem 3.6rem;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4rem;
    padding: 1.15rem 2.4rem;
  }

  input {
    width: 100%;
    font-family: "Pretendard-Regular";
    font-size: 2rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
  input::placeholder {
    font-size: 2rem;
    color: ${colors.gray4};
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
`;
