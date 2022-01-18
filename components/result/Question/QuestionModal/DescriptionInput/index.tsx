import React from "react";

import InputForm from "../InputForm";

interface Props {
  onDescriptionInputClick: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  description: string;
}

function DescriptionInput({ onDescriptionInputClick, description }: Props) {
  return (
    <InputForm title="상세 설명">
      <textarea
        placeholder="자세한 설명을 적어주세요"
        onChange={onDescriptionInputClick}
        value={description}
      />
    </InputForm>
  );
}

export default DescriptionInput;
