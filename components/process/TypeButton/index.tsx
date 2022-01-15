import React from "react";

import { StyledRoot } from "./style";
interface IProps {
  timeType: string;
  onTimeClick: (timeType: string) => void;
  selectedTime: string;
}
const TypeButton = ({ timeType, onTimeClick, selectedTime }: IProps) => {
  const handleTimeClick = () => {
    onTimeClick(timeType);
  };
  const isClicked = timeType === selectedTime ? true : false;

  return (
    <StyledRoot onClick={handleTimeClick} isClicked={isClicked}>
      {timeType}
    </StyledRoot>
  );
};

export default TypeButton;
