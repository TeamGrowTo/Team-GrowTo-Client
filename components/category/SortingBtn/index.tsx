import { ArrowDown, ArrowUp, SmallArrowDown, SmallArrowUp } from "public/assets/icons";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentSortingDefault,
  currentSortingState,
  dropListName,
  ICurrentSortingType,
  isDisableState,
  ISelectedItemName,
  ISelectInnerText,
  isOpenDefault,
  isOpenState,
  isSelectedState,
  SortingItemType,
  SortingType,
} from "store/state";
import { colors } from "styles/colors";
import Screen from "styles/Screen";

import {
  BtnTextWrapper,
  CriteriaItem,
  DropDownBox,
  DropDownItem,
  Select,
  StyledRoot,
} from "./style";

interface SortingBtnProps {
  criteria: SortingType;
  onChangeSelect: (value: string, criteria: SortingType) => void;
  // selectedValue: ICurrentSortingType;
  // children: React.ReactNode;
  // onClickOpenSorting: (criterial: SortingType) => void;
  // onClickSortingItem: (value: SortingType, item: SortingItemType) => void;
  // criteria: SortingType;
  // onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>, criteria: SortingType) => void;
}

//sorting기준에 따라 dropDownList가 다르게보이도록 하자.
function SortingBtn({ criteria, onChangeSelect }: SortingBtnProps) {
  // const isDisable = useRecoilValue(isDisableState);
  // const isSelected = useRecoilValue(isSelectedState);
  // const isOpen = useRecoilValue(isOpenState);
  const [isSelected, setIsSelected] = useRecoilState(isSelectedState);
  const [currentSorting, setCurrentSorting] = useRecoilState(currentSortingState);

  // const [innerText, setInnerText] = useState<ISelectInnerText>(criteria);
  return (
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
    <Select
      onChange={(e) => onChangeSelect(e.target.value, criteria)}
      name={criteria}
      value={currentSorting[criteria]}
      // value={innerText}
      // value={criteria + "|"}
      // value={`${criteria} | ${currentSorting[criteria]}`}
      // value={criteria + (currentSorting[criteria] && `|${currentSorting[criteria]}`)}
    >
      {/* <option>{isSelected ? currentSorting[criteria] : criteria}</option> */}
      <option>{criteria}</option>
      {dropListName[criteria].map((listItem) => (
        <option key={listItem} value={listItem}>
          {listItem}
        </option>
      ))}
    </Select>
  );
}

export default SortingBtn;
