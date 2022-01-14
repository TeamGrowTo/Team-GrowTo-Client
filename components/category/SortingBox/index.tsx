import React, { useState } from "react";

import SortingBtn from "../SortingBtn";
export interface ISorting {
  [key: string]: boolean;
}
export type sortingType = "총 소요시간" | "가격" | "개설일" | "반복시청 기간" | "질의응답 시간";
export type IDropListName = {
  [key in sortingType]: string[];
};
export type ISelectedItemName = {
  [key in sortingType]: string;
};

function SortingBox() {
  const dropListName: IDropListName = {
    "총 소요시간": ["긴 순서", "짧은 순서"],
    가격: ["높은 순", "낮은 순"],
    개설일: ["빠른 순", "늦은 순"],
    "반복시청 기간": ["긴 순서", "짧은 순서"],
    "질의응답 시간": ["빠름", "늦음"],
  };

  const sortingCriteria: sortingType[] = [
    "총 소요시간",
    "가격",
    "개설일",
    "반복시청 기간",
    "질의응답 시간",
  ];

  const selectedItemName: ISelectedItemName = {
    "총 소요시간": "",
    가격: "",
    개설일: "",
    "반복시청 기간": "",
    "질의응답 시간": "",
  };
  const sortingObject: ISorting = {};

  sortingCriteria.forEach((element) => (sortingObject[element] = false));

  const [isOpen, setIsOpen] = useState(sortingObject);
  const handleOpenSorting = (criteria: sortingType) => {
    switch (criteria) {
      case criteria:
        setIsOpen({
          ...sortingObject,
          [criteria]: !isOpen[criteria],
        });
        break;
    }
  };

  const isSelectedObject: ISorting = {};

  sortingCriteria.forEach((element) => (isSelectedObject[element] = false));

  const [isSelected, setIsSelected] = useState(isSelectedObject);
  const [selectedItem, setSelectedItem] = useState(selectedItemName);

  const handleClickSortingItem = (value: sortingType, item: string) => {
    switch (item) {
      case item:
        setSelectedItem({
          ...selectedItemName,
          [value]: item,
        });
        setIsSelected({
          ...isSelectedObject,
          [value]: true,
        });
        break;
    }
    //todo(1)다른 셀렉트 선택된 것 지우기 O
    //todo(2)정렬 api불러오기
  };

  //todo(1) : 선택한 기준이 criteria 옆에 들어가게 O
  //todo(2) : active 효과
  //todo(3) : dropdown arrow icon isOpen에 따라서 위 아래 바꾸기
  //todo(4) : dropdown item선택하면 다른 선택된 item은 없애기 O
  //todo(5) : dropdown item선택하면 api 연결하기
  return (
    <div>
      {sortingCriteria.map((criteria) => (
        <SortingBtn
          key={criteria}
          value={criteria}
          dropListName={dropListName}
          onClickOpenSorting={() => handleOpenSorting(criteria)}
          isOpen={isOpen}
          onClickSortingItem={(value: sortingType, item: string) =>
            handleClickSortingItem(value, item)
          }
          isSelected={isSelected}
          selectedItem={selectedItem}
        >
          {criteria}
        </SortingBtn>
      ))}
    </div>
  );
}

export default SortingBox;
