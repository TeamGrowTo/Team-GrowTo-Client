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
  children: React.ReactNode;
  onClickOpenSorting: (criterial: SortingType) => void;
  onClickSortingItem: (criterial: SortingType, item: SortingItemType) => void;
  onKeyPressSortingItem: (
    criterial: SortingType,
    item: SortingItemType,
    e: React.KeyboardEvent<HTMLLIElement>,
  ) => void;
  criteria: SortingType;
}

//sorting기준에 따라 dropDownList가 다르게보이도록 하자.
function SortingBtn({
  onClickOpenSorting,
  onClickSortingItem,
  onKeyPressSortingItem,
  criteria,
}: SortingBtnProps) {
  const isDisable = useRecoilValue(isDisableState);
  const isSelected = useRecoilValue(isSelectedState);
  const isOpen = useRecoilValue(isOpenState);
  const currentSorting = useRecoilValue(currentSortingState);

  return (
    <StyledRoot
      onClick={() => onClickOpenSorting(criteria)}
      disabled={isDisable}
      isDisable={isDisable}
      isSelected={isSelected[criteria]}
    >
      <CriteriaItem>{criteria}</CriteriaItem>
      {isSelected[criteria] && (
        <CriteriaSelectedItem color={colors.mainBlue}>
          {currentSorting[criteria]}
        </CriteriaSelectedItem>
      )}
      {isSelected[criteria] || (
        <>
          <Screen mobile>{isOpen[criteria] ? <SmallArrowUp /> : <SmallArrowDown />}</Screen>
          <Screen desktop>{isOpen[criteria] ? <ArrowUp /> : <ArrowDown />}</Screen>
        </>
      )}
      {isOpen[criteria] && (
        <DropDownBox>
          {dropListName[criteria].map((item) => (
            <DropDownItem
              tabIndex={0}
              key={item}
              onClick={() => onClickSortingItem(criteria, item)}
              onKeyPress={(e) => onKeyPressSortingItem(criteria, item, e)}
            >
              {item}
            </DropDownItem>
          ))}
        </DropDownBox>
      )}
    </StyledRoot>
  );
}

export default SortingBtn;
