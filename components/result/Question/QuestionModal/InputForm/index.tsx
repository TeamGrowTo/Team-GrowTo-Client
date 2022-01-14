import React from "react";

import { StyledRoot } from "./style";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string;
  flagDropdown?: boolean;
}

const InputForm = function ({ children, title, flagDropdown = false }: Props) {
  return (
    <StyledRoot flagDropdown={flagDropdown}>
      <span>{title}</span>
      {children}
    </StyledRoot>
  );
};

export default InputForm;
