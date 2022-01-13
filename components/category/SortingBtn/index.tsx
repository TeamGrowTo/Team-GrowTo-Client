import React, { useState } from "react";
import { StyledRoot, DropDownBox, DropDownItem } from "./style";
import { ISorting, sortingType, IDropListName } from "../SortingBox";
interface SortingBtnProps {
  value: sortingType;
  children: React.ReactNode;
  dropListName: IDropListName;
  isOpen: ISorting;
  onClickOpenSorting: React.MouseEventHandler<HTMLButtonElement>;
}

//sorting기준에 따라 dropDownList가 다르게보이도록 하자.
function SortingBtn({
  children,
  onClickOpenSorting,
  isOpen,
  dropListName,
  value,
}: SortingBtnProps) {
  return (
    <StyledRoot onClick={onClickOpenSorting}>
      {value}
      {isOpen[value] && (
        <DropDownBox>
          {dropListName[value].map((item) => (
            <DropDownItem>{item}</DropDownItem>
          ))}
        </DropDownBox>
      )}
    </StyledRoot>
  );
}

export default SortingBtn;
