import React from 'react';
import { StyledRoot } from './style';

function CardBox() {

  return (
    <StyledRoot>
      강의제목
      <div>
        총 소요시간
        가격
        질의응답시간
        반복시청기간
      </div>
      <div>
        개설일
        2022.01
      </div>
      <div>
        <span>태그태그</span>
        <span>태그태그</span>
        <span>태그태그</span>
        <span>태그태그</span>
      </div>
      <button> 이동 </button>
    </StyledRoot>
  )
}

export default CardBox
