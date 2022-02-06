import React from "react";

import { Error, StyledRoot, TitleWrapper } from "./style";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string;
  flagDropdown?: boolean;
  isDropdownBlank?: boolean;
  flagError?: boolean;
  errorMessage?: string;
}

function InputForm({
  children,
  title,
  flagDropdown = false,
  isDropdownBlank = true,
  flagError = false,
  errorMessage,
}: Props) {
  //입력 부분이 모두 형태가 동일하게 생겼기 때문에 -> 소제목, 입력란의 style
  //따라서 해당 행태를 잡는 inputForm 컴포넌트에 자식 요소로 입력 요소들을 넣어주어 스타일 중복을 막았습니다.
  return (
    <StyledRoot flagDropdown={flagDropdown} isDropdownBlank={isDropdownBlank}>
      <TitleWrapper>
        <span>{title}</span>
        {flagError ? <Error>{errorMessage}</Error> : <></>}
      </TitleWrapper>
      {children}
    </StyledRoot>
  );
}

export default InputForm;
