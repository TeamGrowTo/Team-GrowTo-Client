import { DownArrowIcon, UpArrowIcon } from "public/assets/icons";
import React, { useState } from "react";
import InputForm from "./InputForm";
import {
  Dropdown,
  EssentialInput,
  InputWrapper,
  Line,
  Modal,
  ReportButton,
  StyledRoot,
  TextArea,
  Title,
  TitleWrapper,
} from "./style";

const QuestionModal = function () {
  const [difference, setDifference] = useState("달랐던 내용을 선택해주세요");
  const [lectureName, setLectureName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [flagDropdown, setFlagDropdown] = useState(false);

  const isBlank = (): boolean => {
    if (difference === "" || lectureName === "" || email === "") return true;
    return false;
  };

  const handleFlagDropdown = () => {
    setFlagDropdown(!flagDropdown);
  };

  const handleDifference = (e: any) => {
    setDifference(e.target.innerHTML);
  };

  const handleLectureName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLectureName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <StyledRoot>
      <Modal>
        <TitleWrapper>
          <Title>제공된 강의 정보와 실제 강의 내용이 다른가요?</Title>
          <p>그로투에게 제보해주세요!</p>
        </TitleWrapper>
        <InputWrapper>
          <EssentialInput>
            <InputForm title="어떤 내용이 달랐나요?*" flagDropdown={flagDropdown}>
              <button onClick={handleFlagDropdown}>
                <span>{difference}</span>
                {flagDropdown ? <UpArrowIcon /> : <DownArrowIcon />}
              </button>
              <Dropdown onClick={handleDifference} flagDropdown={flagDropdown}>
                <li>강의 가격</li>
                <li>강의 정보</li>
                <li>사라진 강의</li>
              </Dropdown>
            </InputForm>
            <InputForm title="강의 이름*">
              <input
                placeholder="강의 이름을 입력해주세요"
                value={lectureName}
                onChange={handleLectureName}
              />
            </InputForm>
            <InputForm title="이메일*">
              <input
                placeholder="수정된 강의 정보를 메일로 보내드려요"
                value={email}
                onChange={handleEmail}
              />
            </InputForm>
          </EssentialInput>
          <Line />
          <TextArea>
            <InputForm title="상세 설명">
              <textarea placeholder="자세한 설명을 적어주세요" onChange={handleDescription}>
                {description}
              </textarea>
            </InputForm>
            <ReportButton isBlank={isBlank()}>오류 내용 제보하기</ReportButton>
          </TextArea>
        </InputWrapper>
      </Modal>
    </StyledRoot>
  );
};

export default QuestionModal;
