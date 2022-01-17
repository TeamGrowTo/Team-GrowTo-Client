import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.section`
  position: fixed;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120rem;
  height: 54.2rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 2.8rem;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-left: 6.6rem;
  margin-top: 3.9rem;
  & > p {
    font-size: 2.9rem;
    font-family: "Pretendard-Bold";
    color: #5262ff;
    //색 이름 정해달라고 말씀드리기
    margin-bottom: 3.2rem;
  }
`;

const Title = styled.h3`
  color: ${colors.gray5};
  font-size: 2.9rem;
  font-family: "Pretendard-Bold";
  line-height: 3.8rem;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const EssentialInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & > * {
    margin-bottom: 3.2rem;
  }
  & > *:end-child {
    margin-bottom: 0;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ReportButton = styled.button<{ isBlank: boolean }>`
  text-align: center;
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  width: 50.2rem;
  height: 6rem;
  border-radius: 4.8rem;
  background-color: #eeeeee;
  color: #d0d0d0;
  ${({ isBlank }) =>
    isBlank
      ? css`
          background-color: ${colors.gray2};
          color: ${colors.gray4};
        `
      : css`
          background-color: ${colors.mainBlue};
          color: white;
          cursor: pointer;
        `}
`;

const Line = styled.div`
  width: 0.05rem;
  height: 36.7rem;
  background-color: ${colors.gray3};
  margin: 0 3.2rem;
`;

export {
  EssentialInput,
  InputWrapper,
  Line,
  ReportButton,
  StyledRoot,
  TextArea,
  Title,
  TitleWrapper,
};
