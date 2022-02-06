import React from "react";

import InputForm from "../InputForm";

interface Props {
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  flagError?: boolean;
}

function EmailInput({ onEmailChange, flagError }: Props) {
  return (
    <InputForm title="이메일*" flagError={flagError} errorMessage="이메일 형식이 맞지 않습니다.">
      <input
        type="email"
        placeholder="수정된 강의 정보를 메일로 보내드려요"
        onChange={onEmailChange}
        required
      />
    </InputForm>
  );
}

export default EmailInput;
