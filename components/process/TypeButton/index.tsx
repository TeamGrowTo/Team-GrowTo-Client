import React from "react";

import { StyledRoot } from "./style";
interface IProps {
  interestType: string;
  onTypeClick: (interestType: string) => void;
  selectedTime: string;
}
const TypeButton = ({ interestType, onTypeClick, selectedTime }: IProps) => {
  const handleTypeClick = () => {
    onTypeClick(interestType);
  };
  const isClicked = interestType === selectedTime ? true : false;

  return (
    <StyledRoot onClick={handleTypeClick} isClicked={isClicked}>
      {interestType}
    </StyledRoot>
  );
};

export default TypeButton;
