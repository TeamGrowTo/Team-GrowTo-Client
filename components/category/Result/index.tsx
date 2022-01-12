import React from 'react'
import styled from 'styled-components';
import CardListContainer from '../CardListContainer';
import SortingBox from '../SortingBox';


function Result() {
  //todo(1):skill선택 후 response 받아서 강의 몇개인지 표시
  //todo(2):sorting버튼에 따라 결과 정렬 : 중복안됨
  //sortingBox에 여러 개의 sortingBtn 
  //todo(3):ㄱㄴㄷ순으로정렬
  //cardListContainer에 여러개의 CardBox


  return (
    <div>
      총 몇개의 강의 (response결과에서 개수가져오기)
      <SortingBox />
      <CardListContainer />
    </div>
  )
}

export default Result

