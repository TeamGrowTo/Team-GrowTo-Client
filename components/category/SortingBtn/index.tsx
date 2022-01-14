import { ArrowDown, ArrowUp } from "public/assets/icons";
import React from "react";
import { colors } from "styles/colors";

import { IDropListName, ISelectedItemName, ISorting, sortingType } from "../SortingBox";
import { BtnTextWrapper, CriteriaItem, DropDownBox, DropDownItem, StyledRoot } from "./style";
//propstype 잘받아온거 맞는지 확인부...탁...해요..
interface SortingBtnProps {
  value: sortingType;
  children: React.ReactNode;
  dropListName: IDropListName;
  selectedItem: ISelectedItemName;
  isOpen: ISorting;
  isSelected: ISorting;
  onClickOpenSorting: React.MouseEventHandler<HTMLButtonElement>;
  onClickSortingItem: React.MouseEventHandler<HTMLButtonElement>;
}

//sorting기준에 따라 dropDownList가 다르게보이도록 하자.
function SortingBtn({
  onClickOpenSorting,
  onClickSortingItem,
  isOpen,
  isSelected,
  dropListName,
  selectedItem,
  value,
}: SortingBtnProps) {
  return (
    <StyledRoot onClick={onClickOpenSorting}>
      <BtnTextWrapper>
        <CriteriaItem color={colors.gray6}>{value}</CriteriaItem>
        {isSelected[value] && (
          <>
            <CriteriaItem>|</CriteriaItem>
            <CriteriaItem color={colors.mainBlue}>{selectedItem[value]}</CriteriaItem>
          </>
        )}
      </BtnTextWrapper>
      {isOpen[value] ? <ArrowUp /> : <ArrowDown />}
      {isOpen[value] && (
        <DropDownBox>
          {dropListName[value].map((item) => (
            <DropDownItem key={item} onClick={() => onClickSortingItem(value, item)}>
              {item}
            </DropDownItem>
          ))}
        </DropDownBox>
      )}
    </StyledRoot>
  );
}

export default SortingBtn;
