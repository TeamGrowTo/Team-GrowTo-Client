import React, { useState } from "react";
import SortingBtn from "../SortingBtn";
export interface ISorting {
  [key: string]: boolean;
}
export type sortingType = "총 소요시간" | "가격" | "개설일" | "반복시청 기간" | "질의응답 시간";
export type IDropListName = {
  [key in sortingType]: string[];
};
function SortingBox() {
  const sortingCriteria: sortingType[] = [
    "총 소요시간",
    "가격",
    "개설일",
    "반복시청 기간",
    "질의응답 시간",
  ];

  const dropListName: IDropListName = {
    "총 소요시간": ["긴 순서", "짧은 순서"],
    가격: ["높은 순", "낮은 순"],
    개설일: ["빠른 순", "늦은 순"],
    "반복시청 기간": ["긴 순서", "짧은 순서"],
    "질의응답 시간": ["빠름", "늦음"],
  };

  const sortingObject: ISorting = {};
  sortingCriteria.forEach((element) => (sortingObject[element] = false));

  const [isOpen, setIsOpen] = useState(sortingObject);
  console.log(isOpen);

  const handleOpenSorting = (criteria: sortingType) => {
    switch (criteria) {
      case "총 소요시간":
        setIsOpen({
          ...sortingObject,
          "총 소요시간": true,
        });
        break;
      case "가격":
        setIsOpen({
          ...sortingObject,
          가격: true,
        });
        break;
      case "개설일":
        setIsOpen({
          ...sortingObject,
          개설일: true,
        });
        break;
      case "반복시청 기간":
        setIsOpen({
          ...sortingObject,
          "반복시청 기간": true,
        });
        break;
      case "질의응답 시간":
        setIsOpen({
          ...sortingObject,
          "질의응답 시간": true,
        });
        break;
    }
  };

  return (
    <div>
      {sortingCriteria.map((criteria) => (
        <SortingBtn
          key={criteria}
          value={criteria}
          dropListName={dropListName}
          onClickOpenSorting={() => handleOpenSorting(criteria)}
          isOpen={isOpen}
        >
          {criteria}
        </SortingBtn>
      ))}
      {/* <SortingBtn onClickSortingBtn={handleSortingBtn} dropItemName={["긴 순서", "짧은 순서"]}>
        총 소요시간
      </SortingBtn>
      <SortingBtn dropItemName={["높은 순", "낮은 순"]}>가격</SortingBtn>
      <SortingBtn dropItemName={["빠른 순", "늦은 순"]}>개설일</SortingBtn>
      <SortingBtn dropItemName={["긴 순서", "짧은 순서"]}>반복시청 기간</SortingBtn>
      <SortingBtn dropItemName={["빠름", "늦음"]}>질의응답 시간</SortingBtn> */}
    </div>
  );
}

export default SortingBox;
