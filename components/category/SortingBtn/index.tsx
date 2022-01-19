import { ArrowDown, ArrowUp, SmallArrowDown, SmallArrowUp } from "public/assets/icons";
import React from "react";
import { useRecoilState } from "recoil";
import { colors } from "styles/colors";
import Screen from "styles/Screen";

import {
  IDropListName,
  ISelectedItemName,
  ISorting,
  SortingItemType,
  SortingType,
} from "../SortingBox";
import { BtnTextWrapper, CriteriaItem, DropDownBox, DropDownItem, StyledRoot } from "./style";
//propstype 잘받아온거 맞는지 확인부...탁...해요..
interface SortingBtnProps {
  value: SortingType;
  children: React.ReactNode;
  dropListName: IDropListName;
  selectedItem: ISelectedItemName;
  isOpen: ISorting;
  isSelected: ISorting;
  onClickOpenSorting: (criterial: SortingType) => void;
  onClickSortingItem: (value: SortingType, item: SortingItemType) => void;
  criteria: SortingType;
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
  criteria,
}: SortingBtnProps) {
  return (
    <StyledRoot onClick={() => onClickOpenSorting(criteria)}>
      <BtnTextWrapper>
        <CriteriaItem color={colors.gray6}>{value}</CriteriaItem>
        {isSelected[value] && (
          <>
            <CriteriaItem>|</CriteriaItem>
            <CriteriaItem color={colors.mainBlue}>{selectedItem[value]}</CriteriaItem>
          </>
        )}
      </BtnTextWrapper>
      <Screen mobile>{isOpen[value] ? <SmallArrowUp /> : <SmallArrowDown />}</Screen>
      <Screen desktop>{isOpen[value] ? <ArrowUp /> : <ArrowDown />}</Screen>
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
