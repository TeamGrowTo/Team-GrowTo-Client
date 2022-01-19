import React from "react";

import { StyledRoot } from "./style";

interface BlueButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  type?: "submit" | "reset" | "button";
  margin?: string;
  maxWidth?: string | undefined;
  onClick: () => void;
}

function BlueButton({
  children,
  width = "63rem",
  height = "6.8rem",
  fontSize = "2rem",
  onClick,
  type = "submit",
  margin = "auto auto",
  maxWidth,
}: BlueButtonProps) {
  return (
    <StyledRoot
      width={width}
      height={height}
      fontSize={fontSize}
      margin={margin}
      type={type}
      onClick={onClick}
      maxWidth={maxWidth}
    >
      {children}
    </StyledRoot>
  );
}

export default BlueButton;
