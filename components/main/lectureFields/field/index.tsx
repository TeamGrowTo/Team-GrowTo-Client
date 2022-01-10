import React from "react";
import { StyledRoot } from "./style";

interface Prop {
  children: string;
}

const Field = ({ children }: Prop) => {
  return <StyledRoot>{children}</StyledRoot>;
};

export default Field;
