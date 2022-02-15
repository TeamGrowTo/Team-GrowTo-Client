import { ArrowDown, ArrowUp, SmallArrowDown, SmallArrowUp } from "public/assets/icons";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  currentSortingState,
  dropListName,
  isDisableState,
  isOpenState,
  isSelectedState,
  SortingItemType,
  SortingType,
} from "store/state";
import { colors } from "styles/colors";
import Screen from "styles/Screen";

import { CriteriaItem, CriteriaSelectedItem, DropDownBox, DropDownItem, StyledRoot } from "./style";

interface SortingBtnProps {
  value: SortingType;
  children: React.ReactNode;
  onClickOpenSorting: (criterial: SortingType) => void;
  onClickSortingItem: (value: SortingType, item: SortingItemType) => void;
  criteria: SortingType;
}

//sorting기준에 따라 dropDownList가 다르게보이도록 하자.
function SortingBtn({ onClickOpenSorting, onClickSortingItem, value, criteria }: SortingBtnProps) {
  const isDisable = useRecoilValue(isDisableState);
  const isSelected = useRecoilValue(isSelectedState);
  const isOpen = useRecoilValue(isOpenState);
  const currentSorting = useRecoilValue(currentSortingState);

  return (
    <StyledRoot
      onClick={() => onClickOpenSorting(criteria)}
      disabled={isDisable}
      isDisable={isDisable}
      isSelected={isSelected[value]}
    >
      <CriteriaItem>{value}</CriteriaItem>
      {isSelected[value] && (
        <CriteriaSelectedItem color={colors.mainBlue}>{currentSorting[value]}</CriteriaSelectedItem>
      )}
      {isSelected[value] || (
        <>
          <Screen mobile>{isOpen[value] ? <SmallArrowUp /> : <SmallArrowDown />}</Screen>
          <Screen desktop>{isOpen[value] ? <ArrowUp /> : <ArrowDown />}</Screen>
        </>
      )}
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
