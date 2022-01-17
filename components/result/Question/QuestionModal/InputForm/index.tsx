import React from "react";

import { StyledRoot } from "./style";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string;
  flagDropdown?: boolean;
  isDropdownBlank?: boolean;
}

const InputForm = function ({
  children,
  title,
  flagDropdown = false,
  isDropdownBlank = true,
}: Props) {
  return (
    <StyledRoot flagDropdown={flagDropdown} isDropdownBlank={isDropdownBlank}>
      <span>{title}</span>
      {children}
    </StyledRoot>
  );
};

export default InputForm;
