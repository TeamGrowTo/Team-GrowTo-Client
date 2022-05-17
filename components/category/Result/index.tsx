import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState, lectureDataList } from "store/state";

import CardListContainer from "../CardListContainer";
import SortingBox from "../SortingBox";
import { LectureCount, LectureCountBox, ResultBox, ResultTop } from "./style";
function Result() {
  //todo(1):skill선택 후 response 받아서 강의 몇개인지 표시
  //todo(2):sorting버튼에 따라 결과 정렬 : 중복안됨O
  //sortingBox에 여러 개의 sortingBtnO
  //todo(3):ㄱㄴㄷ순으로정렬 : 서버에서 정렬해줌
  //cardListContainer에 여러개의 CardBox O

  //API
  //categoryId, skillId 받아와서 api요청하기
  const LectureDataList = useRecoilValue(lectureDataList);
  const skill = useRecoilValue(currentSkillState);
  const category = useRecoilValue(currentCategoryState);

  return (
    <ResultBox>
      <ResultTop>
        {skill?.skillName ? (
          <LectureCountBox>
            <LectureCount color="mainBlue">총 {LectureDataList?.length}개 </LectureCount>
            <LectureCount color="mildBlack">
              {skill.skillName} {category?.categoryName} 강의
            </LectureCount>
          </LectureCountBox>
        ) : (
          <LectureCountBox>전체 0</LectureCountBox>
        )}
        <SortingBox />
      </ResultTop>
      <CardListContainer />
    </ResultBox>
  );
}

export default Result;
