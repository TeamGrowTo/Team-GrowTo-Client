import { getLectureDataList } from "pages/apis/info.api";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState, isDisableState } from "store/state";

import SortingBtn from "../SortingBtn";
import { StyledRoot } from "./style";
//todo(1) : 선택한 기준이 criteria 옆에 들어가게 O
//todo(2) : active 효과 O
//todo(3) : dropdown arrow icon isOpen에 따라서 위 아래 바꾸기 O
//todo(4) : dropdown item선택하면 다른 선택된 item은 없애기 O
//todo(5) : dropdown item선택하면 api 연결하기

//isOpen 객체의 type정의
export interface ISorting {
  [key: string]: boolean;
}
//dropdown 내리면 나오는 선택 목록들 type정의
export type SortingType = "총 소요시간" | "가격" | "개설일" | "반복시청 기간" | "질의응답 시간";
export type SortingItemType =
  | "긴 순"
  | "짧은 순"
  | "최근 순"
  | "높은 순"
  | "낮은 순"
  | "빠름"
  | "긴 순서"
  | "짧은 순서";

export type IDropListName = {
  [key in SortingType]: SortingItemType[];
};
//dropdown에서 선택한 것 저장할 객체의 type정의
export type ISelectedItemName = {
  [key: string]: string;
};

enum SortingText {
  //총 소요시간
  "긴 순" = "slow",
  "짧은 순" = "fast",
  //개설일
  "최근 순" = "date",
  //가격
  "높은 순" = "price",
  "낮은 순" = "-price",
  //반복시청 기간
  "긴 순서" = "repeat",
  "짧은 순서" = "-repeat",
  //질의 응답시간
  "빠름" = "answer",
}
// const sortingTextObj: ISortingText = {
//   0: {
//     "긴 순": "slow",
//     "짧은 순": "fast",
//   },
//   1: {
//     "높은 순": "price",
//     "낮은 순": "-price",
//   },
//   2: {
//     "최근 순": "date",
//   },
//   3: {
//     "긴 순서": "startYear",
//     "짧은 순서": "-startYear",
//   },
//   4: {
//     빠름: "answer",
//   },
// };

// type ISortingText = {
//   [key in SortingType]: { [key in SortingItemType]: string };
// };

function SortingBox() {
  const category = useRecoilValue(currentCategoryState);
  const skill = useRecoilValue(currentSkillState);
  const isDisable = useRecoilValue(isDisableState);

  //가격과 개설일은 eslint자동수정으로 따옴표가 자꾸 빠지는데 문제없이 돌아갑니다
  //dropListName은 드랍다운 클릭했을 때 나오는 목록 리스트들을 기준별로 저장한 것
  const dropListName: IDropListName = {
    "총 소요시간": ["긴 순", "짧은 순"],
    가격: ["높은 순", "낮은 순"],
    개설일: ["최근 순"],
    "반복시청 기간": ["긴 순서", "짧은 순서"],
    "질의응답 시간": ["빠름"],
  };
  //정렬하는 select형식의 button들을 만들기 위해 기준을 배열로 만들어서 map해주었다.
  const sortingCriteria: SortingType[] = [
    "총 소요시간",
    "가격",
    "개설일",
    "반복시청 기간",
    "질의응답 시간",
  ];
  //어떤 것이 선택되었는지를 표시하기 위한 객체. 처음에는 아무것도 선택되지 않았기 때문에 빈문자열.
  // const selectedItemName: ISelectedItemName = {
  //   "총 소요시간": "",
  //   가격: "",
  //   개설일: "",
  //   "반복시청 기간": "",
  //   "질의응답 시간": "",
  // };
  //드랍다운 한 개가 열리면 다른 것들이 닫혀야 함 : 여러 개를 한 번에 관리해줘야함
  //=>드랍다운이 열렸는지 여부(isOpen)를 객체에 담는다. ex){"반복시청 기간": true, ... }
  //isOpen객체를 만들기 위해 sortingCriteria 배열으로 forEach문을 사용해 값이 모두 false인 객체를 만들었다.
  const sortingObject: ISorting = {};

  sortingCriteria.forEach((element) => (sortingObject[element] = false));

  const [isOpen, setIsOpen] = useState(sortingObject);
  //버튼 클릭 시, 버튼의 기준(sortingCriteria의 요소)을 가져와서 switch문에서 처리
  //각각의 case마다 선택한 기준을 제외하곤 모두 false로 바꿔주고(sortingObject는 isOpen의 default값으로 들어간 객체)
  //선택된기준을 key로 하는 value는 반대 값으로 바꿔준다.
  const handleOpenSorting = (criteria: SortingType) => {
    switch (criteria) {
      case criteria:
        setIsOpen({
          ...sortingObject,
          [criteria]: !isOpen[criteria],
        });
        break;
    }
  };
  //선택된 기준의 경우만 무엇이 선택되었는지 버튼 안에 표시되어야함.
  //중복 선택이 안되기 때문에 isOpen처럼 isSelected도 객체로.. 한번에 관리한다.
  //초기값은 모두 false.

  //중복 정렬기능이 없기 때문에 한 곳에서 선택했으면 나머지는 초기화되어야함
  //어떤 기준의 어떤 기준 목록을 선택했는지 저장 필요 ex){"가격": "높은 순", ...}
  //초기값은 모두 빈 문자열

  //-> 모두 한 객체에 담아 관리하기
  //isOpen과 같이 정렬 기준배열을 forEach문으로
  const isSelectedObject: ISorting = {};
  const selectedItemName: ISelectedItemName = {};

  sortingCriteria.forEach((element) => (isSelectedObject[element] = false));
  sortingCriteria.forEach((element) => (selectedItemName[element] = ""));

  const [isSelected, setIsSelected] = useState(isSelectedObject);
  const [selectedItem, setSelectedItem] = useState(selectedItemName);

  //드랍다운 아이템을 클릭하면 어떤 기준을 선택했고, 그 기준(value)의 어떤 목록(item)을 선택했는지 받아온다.
  //item이 '긴 순서' '짧은 순서'로 겹치는 경우가 있긴 한데 받아오는 value가 달라서 잘 작동되는 것 같다.
  //어떤 item이 선택되었는지 selectedItemd에 저장하고, 나머지는 빈 문자열로 초기화
  //어떤 기준(value)이 선택되었는지 true로 바꾸고 나머진 fale로 초기화
  //나중에 api연결도 추가해야함
  const handleClickSortingItem = async (value: SortingType, item: SortingItemType) => {
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
    if (category && skill) {
      const ordering: string = SortingText[item];

      await getLectureDataList(category.id, skill.id, ordering);
    }
  };

  return (
    <StyledRoot>
      {sortingCriteria.map((criteria) => (
        <SortingBtn
          key={criteria}
          value={criteria}
          dropListName={dropListName}
          onClickOpenSorting={handleOpenSorting}
          isOpen={isOpen}
          onClickSortingItem={handleClickSortingItem}
          isSelected={isSelected}
          selectedItem={selectedItem}
          criteria={criteria}
          isDisable={isDisable}
        >
          {criteria}
        </SortingBtn>
      ))}
    </StyledRoot>
  );
}

export default SortingBox;
