import React from "react";
import { Wrapper, TotalCompare, CustomSearch, RequestCompare } from "./style";

export default function MainReport() {
  return (
    <Wrapper>
      <TotalCompare>
        <img src="" alt="" />
        <h2>총 비교 강의</h2>
        <div>개</div>
      </TotalCompare>
      <CustomSearch>
        <img src="" alt="" />
        <h2>맞춤 강의 찾기</h2>
        <div>회</div>
      </CustomSearch>
      <RequestCompare>
        <img src="" alt="" />
        request
        <h2>비교 요청</h2>
        <div>건</div>
      </RequestCompare>
    </Wrapper>
  );
}
