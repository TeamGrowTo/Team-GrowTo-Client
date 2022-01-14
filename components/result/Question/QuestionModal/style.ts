import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(126, 126, 126, 0.7);
  width: 100%;
  height: 100%;
`;

const Modal = styled.section`
  position: fixed;
  top: 26.9rem;
  left: 36rem;
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
`;

const InputWrapper = styled.div`
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

const Dropdown = styled.ul<{ flagDropdown: boolean }>`
  position: absolute;
  top: 9.1rem;
  padding: 2.2rem 3.2rem;
  height: 16.8rem;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2rem;
  font-family: "Pretendard-Regular";
  list-style: none;
  color: ${colors.subBlack};
  background-color: white;
  border: 0.1rem solid ${colors.gray3};
  border-radius: 0 0 2.8rem 2.8rem;
  ${({ flagDropdown }) =>
    flagDropdown
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  & > li:hover {
    cursor: pointer;
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
          background-color: #eeeeee;
          color: #d0d0d0;
        `
      : css`
          background-color: #666666;
          color: #f5f5f5;
        `}
`;

const Line = styled.div`
  width: 0.1rem;
  height: 36.7rem;
  background-color: #c5c5c5;
  //나중에 이름 지어달라고 말씀드리기
  margin: 0 3.2rem;
`;

export {
  StyledRoot,
  Modal,
  TitleWrapper,
  Title,
  InputWrapper,
  EssentialInput,
  Dropdown,
  TextArea,
  ReportButton,
  Line,
};
