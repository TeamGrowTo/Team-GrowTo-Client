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
