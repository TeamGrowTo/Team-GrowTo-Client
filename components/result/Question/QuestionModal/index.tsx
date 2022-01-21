import { postLectureReport } from "apis/lectures.api";
import React, { useState } from "react";

import DescriptionInput from "./DescriptionInput";
import DropdownInput from "./DropdownInput";
import EmailInput from "./EmailInput";
import LectureNameInput from "./LectureNameInput";
import QuestionReported from "./QuestionReported";
import {
  EssentialInput,
  InputWrapper,
  Line,
  ReportButton,
  StyledRoot,
  TextArea,
  Title,
  TitleWrapper,
} from "./style";
interface Props {
  onCloseModal: () => void;
}

function QuestionModal({ onCloseModal }: Props) {
  const [difference, setDifference] = useState(-1);
  const [lectureName, setLectureName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [flagDropdown, setFlagDropdown] = useState(false);
  const [flagReport, setFlagReport] = useState(false);

  const isBlank = (): boolean => {
    if (difference === -1 || lectureName === "" || email === "") return true;

    return false;
  };

  const handleFlagDropdown = () => {
    setFlagDropdown(!flagDropdown);
  };

  const handleDifference = (index: number) => {
    setDifference(index);
    setFlagDropdown(false);
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

  const handleReport = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isBlank()) {
      e.preventDefault();

      return;
    }
    postReport();
    setDifference(-1);
    setLectureName("");
    setEmail("");
    setDescription("");
    setFlagReport(!flagReport);
    e.preventDefault();
  };

  const postReport = async () => {
    await postLectureReport({
      difference,
      lectureName,
      description,
      email,
    });
  };

  return (
    <StyledRoot>
      {flagReport ? (
        <QuestionReported onCloseModal={onCloseModal}></QuestionReported>
      ) : (
        <>
          <TitleWrapper>
            <Title>제공된 강의 정보와 실제 강의 내용이 다른가요?</Title>
            <p>그로투에게 제보해주세요!</p>
          </TitleWrapper>
          <InputWrapper>
            <EssentialInput>
              <DropdownInput
                flagDropdown={flagDropdown}
                onFlagDropdownClick={handleFlagDropdown}
                onDifferenceChange={handleDifference}
                difference={difference}
              />
              <LectureNameInput onLectureNameChange={handleLectureName} lectureName={lectureName} />
              <EmailInput onEmailChange={handleEmail} email={email} />
            </EssentialInput>
            <Line />
            <TextArea>
              <DescriptionInput
                onDescriptionInputClick={handleDescription}
                description={description}
              />
              <ReportButton onClick={handleReport} isBlank={isBlank()}>
                오류 내용 제보하기
              </ReportButton>
            </TextArea>
          </InputWrapper>
        </>
      )}
    </StyledRoot>
  );
}

export default QuestionModal;
