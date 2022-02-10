import { getSortingLectureDataList } from "apis/lectures.api";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingDefault,
  currentSortingState,
  isSelectedDefault,
  isSelectedState,
  lectureDataList,
  sortingCriteria,
  SortingItemType,
  SortingType,
} from "store/state";

import SortingBtn from "../SortingBtn";
import { StyledRoot } from "./style";
//todo(1) : 선택한 기준이 criteria 옆에 들어가게 O
//todo(2) : active 효과 O
//todo(3) : dropdown arrow icon isOpen에 따라서 위 아래 바꾸기 O
//todo(4) : dropdown item선택하면 다른 선택된 item은 없애기 O
//todo(5) : dropdown item선택하면 api 연결하기 O

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

function SortingBox() {
  const category = useRecoilValue(currentCategoryState);
  const skill = useRecoilValue(currentSkillState);
  const setIsSelected = useSetRecoilState(isSelectedState);
  const setCurrentSorting = useSetRecoilState(currentSortingState);
  const setLectureDataList = useSetRecoilState(lectureDataList);

  //isOpen은 select 태그 사용하면서 필요없어짐.
  //중복 정렬기능이 없기 때문에 한 곳에서 선택했으면 나머지는 초기화되어야함
  //어떤 기준의 어떤 기준 목록을 선택했는지 저장 필요 ex){"가격": "높은 순", ...}
  //초기값은 모두 빈 문자열

  //-> 모두 한 객체에 담아 관리하기

  //드랍다운 아이템을 클릭하면 어떤 기준을 선택했고, 그 기준(value)의 어떤 목록(item)을 선택했는지 받아온다.
  //item이 '긴 순서' '짧은 순서'로 겹치는 경우가 있긴 한데 받아오는 value가 달라서 잘 작동되는 것 같다.
  //어떤 item이 선택되었는지 selectedItemd에 저장하고, 나머지는 빈 문자열로 초기화
  //어떤 기준(value)이 선택되었는지 true로 바꾸고 나머진 false로 초기화

  const handleChangeSelect = async (value: string, criteria: SortingType) => {
    switch (value) {
      case value:
        setCurrentSorting({
          ...currentSortingDefault,
          [criteria]: value,
        });
        setIsSelected({
          ...isSelectedDefault,
          [criteria]: true,
        });
        break;
    }
    const orderingValue = value as SortingItemType;

    if (category && skill) {
      const ordering: string = SortingText[orderingValue];

      const data = await getSortingLectureDataList(category.id, skill.id, ordering);

      if (data) {
        setLectureDataList(data); //확인필요
      }
    }
  };

  return (
    <StyledRoot>
      {sortingCriteria.map((criteria) => (
        <SortingBtn criteria={criteria} key={criteria} onChangeSelect={handleChangeSelect} />
      ))}
      {/* {sortingCriteria.map((criteria) => (
        <SortingBtn
          key={criteria}
          value={criteria}
          onClickOpenSorting={handleOpenSorting}
          onClickSortingItem={handleClickSortingItem}
          criteria={criteria}
        >
          {criteria}
        </SortingBtn>
      ))} */}
    </StyledRoot>
  );
}

export default SortingBox;
