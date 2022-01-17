import { DownArrowIcon, UpArrowIcon } from "public/assets/icons";
import React from "react";

import InputForm from "../InputForm";
import { Dropdown } from "./style";

interface Props {
  dropdownList: string[];
  flagDropdown: boolean;
  onFlagDropdownClick: () => void;
  difference: string;
  onDifferenceChange: (index: number) => void;
}

const DropdownInput = function ({
  dropdownList,
  flagDropdown,
  onFlagDropdownClick,
  difference,
  onDifferenceChange,
}: Props) {
  return (
    <InputForm
      title="어떤 내용이 달랐나요?*"
      flagDropdown={flagDropdown}
      isDropdownBlank={difference === ""}
    >
      <button type="button" onClick={onFlagDropdownClick}>
        {difference === "" ? <span>달랐던 내용을 선택해주세요</span> : <span>{difference}</span>}
        {flagDropdown ? <UpArrowIcon /> : <DownArrowIcon />}
      </button>
      <Dropdown flagDropdown={flagDropdown}>
        {dropdownList.map((item, index) => (
          <button type="button" onClick={() => onDifferenceChange(index)} key={index}>
            {item}
          </button>
        ))}
      </Dropdown>
    </InputForm>
  );
};

export default DropdownInput;
