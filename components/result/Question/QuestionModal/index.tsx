import { postLectureReport } from "apis/lectures.api";
import { UseRegex } from "hooks/UseRegex";
import { MobileQuestionModalCloseIcon, QuestionModalCloseIcon } from "public/assets/icons";
import React, { useEffect, useState } from "react";
import Screen from "styles/Screen";

import DescriptionInput from "./DescriptionInput";
import DropdownInput from "./DropdownInput";
import EmailInput from "./EmailInput";
import LectureNameInput from "./LectureNameInput";
import QuestionReported from "./QuestionReported";
import {
  CloseIconWrapper,
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
  const [flagEmailRegExp, setFlagEmailRegExp] = useState(true);

  const isBlank = (): boolean => {
    if (difference === -1 || lectureName === "" || email === "") return true;

    return false;
  };

  const checkEmail = () => {
    return UseRegex().checkEmail(email);
  };

  const resetState = () => {
    setDifference(-1);
    setLectureName("");
    setEmail("");
    setDescription("");
    setFlagReport(!flagReport);
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

  //이 함수는 오류 내용 제보하기를 눌렀을 때 실행됩니다.
  //강의 가격, 이름, 이메일이 비었는지 확인
  //이메일 형식이 맞는지 확인
  //후에 맞다면 post요청 보내고 state 초기화 합니다.
  const handleReport = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isBlank()) return;
    if (flagEmailRegExp) return;
    postReport();
    resetState();
  };

  const postReport = async () => {
    await postLectureReport({
      difference,
      lectureName,
      description,
      email,
    });
  };

  useEffect(() => {
    if (email === "" || checkEmail()) setFlagEmailRegExp(false);
    else setFlagEmailRegExp(true);
  }, [email]);

  //전체적으로 title과 input 즉, 입력을 받는 부분으로 나눴습니다.
  //input또한 필수 입력과 오른쪽의 textarea와 버튼 부분으로 나눴습니다.
  //각 입력 부분들은 따로 컴포넌트화 되어있습니다. 모두 돌아가는 로직은 현재 컴포넌트에 두고 인자를 받아 함수를 실행합니다.
  //컴포넌트 안에 들어가보면 모두 inputForm 컴포넌트로 감싸여져 있는데 이는 동일한 스타일을 적용하기 위함입니다
  //자세한 설명은 inputForm 컴포넌트 참고
  return (
    <StyledRoot>
      {flagReport ? (
        <QuestionReported onCloseModal={onCloseModal}></QuestionReported>
      ) : (
        <>
          <CloseIconWrapper onClick={() => onCloseModal()}>
            <Screen desktop>
              <QuestionModalCloseIcon />
            </Screen>
            <Screen mobile>
              <MobileQuestionModalCloseIcon />
            </Screen>
          </CloseIconWrapper>
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
              <EmailInput onEmailChange={handleEmail} flagError={flagEmailRegExp} />
            </EssentialInput>
            <Screen desktop>
              <Line />
            </Screen>
            <TextArea>
              <DescriptionInput
                onDescriptionInputClick={handleDescription}
                description={description}
              />
              <ReportButton onClick={handleReport} isDisabled={isBlank() || flagEmailRegExp}>
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
