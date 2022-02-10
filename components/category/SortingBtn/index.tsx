import { ArrowDown, ArrowUp, SmallArrowDown, SmallArrowUp } from "public/assets/icons";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentSortingDefault,
  currentSortingState,
  dropListName,
  ICurrentSortingType,
  isDisableState,
  isSelectedState,
  SortingItemType,
  SortingType,
} from "store/state";
import { colors } from "styles/colors";
import Screen from "styles/Screen";

import { DropDownBox, DropDownItem, Select, SelectBox } from "./style";

interface SortingBtnProps {
  criteria: SortingType;
  onChangeSelect: (value: string, criteria: SortingType) => void;
}

//sorting기준에 따라 dropDownList가 다르게보이도록 하자.
function SortingBtn({ criteria, onChangeSelect }: SortingBtnProps) {
  const [currentSorting, setCurrentSorting] = useRecoilState(currentSortingState);
  const isDisable = useRecoilValue(isDisableState);
  const isSelected = useRecoilValue(isSelectedState);

  return (
    <SelectBox selected={isSelected[criteria]}>
      <Select
        name={criteria}
        // value={currentSorting[criteria]}
        onChange={(e) => onChangeSelect(e.currentTarget.value, criteria)}
        disabled={isDisable}
        selected={isSelected[criteria]}
        // value={`${criteria} | ${currentSorting[criteria]}`}
        // value={criteria + (currentSorting[criteria] && `|${currentSorting[criteria]}`)}
      >
        {/* <option>{isSelected ? currentSorting[criteria] : criteria}</option> */}
        <DropDownItem disabled selected>
          {criteria}
        </DropDownItem>
        {dropListName[criteria].map((listItem) => (
          <DropDownItem key={listItem} value={listItem}>
            {listItem}
          </DropDownItem>
        ))}
      </Select>
      <Screen desktop>
        <ArrowDown />
      </Screen>
      <Screen mobile>
        <SmallArrowDown />
      </Screen>
    </SelectBox>
    // <StyledRoot
    //   onClick={() => onClickOpenSorting(criteria)}
    //   disabled={isDisable}
    //   isDisable={isDisable}
    // >
    //   <BtnTextWrapper>
    //     <CriteriaItem color={colors.gray6}>{value}</CriteriaItem>
    //     {isSelected[value] && (
    //       <>
    //         <CriteriaItem>|</CriteriaItem>
    //         <CriteriaItem color={colors.mainBlue}>{currentSorting[value]}</CriteriaItem>
    //       </>
    //     )}
    //   </BtnTextWrapper>
    //   <Screen mobile>{isOpen[value] ? <SmallArrowUp /> : <SmallArrowDown />}</Screen>
    //   <Screen desktop>{isOpen[value] ? <ArrowUp /> : <ArrowDown />}</Screen>
    //   {isOpen[value] && (
    //     <DropDownBox>
    //       {dropListName[value].map((item) => (
    //         <DropDownItem key={item} onClick={() => onClickSortingItem(value, item)}>
    //           {item}
    //         </DropDownItem>
    //       ))}
    //     </DropDownBox>
    //   )}
    // </StyledRoot>
  );
}

export default SortingBtn;
