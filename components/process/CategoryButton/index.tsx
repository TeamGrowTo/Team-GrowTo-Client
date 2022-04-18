import React from "react";

import { StyledRoot } from "./style";
interface IProps {
  interestType: string;
  onTypeClick: (interestType: string) => void;
  selectedTime: string;
}
function CategoryButton() {
  return <StyledRoot></StyledRoot>;
}

export default CategoryButton;
