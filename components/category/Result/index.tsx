import React from "react";

import CardListContainer from "../CardListContainer";
import SortingBox from "../SortingBox";
import { MessageWrapper, ResultBox, ResultCount, ResultMessage, SelectedCategory } from "./style";

function Result() {
  //todo(1):skill선택 후 response 받아서 강의 몇개인지 표시
  //todo(2):sorting버튼에 따라 결과 정렬 : 중복안됨
  //sortingBox에 여러 개의 sortingBtn
  //todo(3):ㄱㄴㄷ순으로정렬
  //cardListContainer에 여러개의 CardBox

  return (
    <ResultBox>
      <MessageWrapper>
        <ResultCount>총 100개</ResultCount>
        <SelectedCategory> 퍼포먼스 & 디지털마케팅</SelectedCategory>
        <ResultMessage> 강의 모두 보기</ResultMessage>
      </MessageWrapper>
      <SortingBox />
      <CardListContainer />
    </ResultBox>
  );
}

export default Result;
