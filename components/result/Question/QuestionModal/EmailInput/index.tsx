import React from "react";

import InputForm from "../InputForm";

interface Props {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = function ({ email, onEmailChange }: Props) {
  return (
    // <form name="reportForm">
    <InputForm title="이메일*">
      <input
        type="email"
        placeholder="수정된 강의 정보를 메일로 보내드려요"
        value={email}
        onChange={onEmailChange}
        required
      />
    </InputForm>
    // </form>
  );
};

export default EmailInput;
