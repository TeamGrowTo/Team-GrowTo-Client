import { DesktopQuestionDropdownIcon, MobileQuestionDropdownIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import InputForm from "../InputForm";
import { Dropdown } from "./style";

interface Props {
  flagDropdown: boolean;
  difference: number;
  onFlagDropdownClick: () => void;
  onDifferenceChange: (index: number) => void;
}

const dropdownList = ["강의 가격", "강의 정보", "사라진 강의", "기타"];

function DropdownInput({
  flagDropdown,
  onFlagDropdownClick,
  difference,
  onDifferenceChange,
}: Props) {
  return (
    <InputForm
      title="어떤 내용이 달랐나요?*"
      flagDropdown={flagDropdown}
      isDropdownBlank={difference === -1}
    >
      <button type="button" onClick={onFlagDropdownClick}>
        {difference === -1 ? (
          <span>달랐던 내용을 선택해주세요</span>
        ) : (
          <span>{dropdownList[difference]}</span>
        )}
        <Screen desktop>
          <DesktopQuestionDropdownIcon />
        </Screen>
        <Screen mobile>
          <MobileQuestionDropdownIcon />
        </Screen>
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
}

export default DropdownInput;
