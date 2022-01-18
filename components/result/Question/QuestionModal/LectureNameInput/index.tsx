import React from "react";

import InputForm from "../InputForm";

interface Props {
  lectureName: string;
  onLectureNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LectureNameInput({ lectureName, onLectureNameChange }: Props) {
  return (
    <InputForm title="강의 이름*">
      <input
        placeholder="강의 이름을 입력해주세요"
        value={lectureName}
        onChange={onLectureNameChange}
      />
    </InputForm>
  );
}

export default LectureNameInput;
