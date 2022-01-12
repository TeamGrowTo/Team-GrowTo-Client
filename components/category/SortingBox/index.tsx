import React from 'react'
import SortingBtn from '../SortingBtn'

function SortingBox() {
  return (
    <div>
      <SortingBtn dropItemName={["긴 순서", "짧은 순서"]}>총 소요시간</SortingBtn>
      <SortingBtn dropItemName={["높은 순", "낮은 순"]}>가격</SortingBtn>
      <SortingBtn dropItemName={["빠르 순", "늦은 순"]}>개설일</SortingBtn>
      <SortingBtn dropItemName={["긴 순서", "짧은 순서"]}>반복시청 기간</SortingBtn>
      <SortingBtn dropItemName={["빠름", "늦음"]}>질의응답 시간</SortingBtn>
    </div>
  )
}

export default SortingBox