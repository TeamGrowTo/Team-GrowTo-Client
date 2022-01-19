import Link from "next/link";
import { ArrowRight } from "public/assets/icons";
import React from "react";

import {
  LectureDateBox,
  LectureInfoBox,
  LectureInfoData,
  LectureInfoName,
  LectureInfoWrapper,
  LectureLinkBtn,
  LectureTag,
  LectureTagBox,
  LectureTitle,
  LectureTitleBox,
  StyledRoot,
  TagWrapper,
} from "./style";

function LargeCardBox() {
  return (
    <StyledRoot>
      <LectureTitleBox>
        <LectureTitle>퍼포먼스 마케팅 데이터로 완전 정복</LectureTitle>
      </LectureTitleBox>
      <LectureInfoBox>
        <LectureInfoWrapper>
          <LectureInfoName>총 소요시간</LectureInfoName>
          <LectureInfoData>55시간</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>질문 응답시간</LectureInfoName>
          <LectureInfoData>빠름</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>가격</LectureInfoName>
          <LectureInfoData>20만원</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>반복 시청 기간</LectureInfoName>
          <LectureInfoData>무제한</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <LectureDateBox>
        <LectureInfoName>개설일</LectureInfoName>
        <LectureInfoData>2022</LectureInfoData>
      </LectureDateBox>
      <LectureTagBox>
        <TagWrapper>
          <LectureTag>실습프로젝트20종</LectureTag>
          <LectureTag>광고집행툴</LectureTag>
          <LectureTag>앱 마케팅</LectureTag>
          <LectureTag>데이터수집추적분석툴</LectureTag>
          <LectureTag>웹 최적화</LectureTag>
        </TagWrapper>
      </LectureTagBox>
      <Link href="/" passHref>
        <LectureLinkBtn>
          <ArrowRight />
        </LectureLinkBtn>
      </Link>
    </StyledRoot>
  );
}

export default LargeCardBox;
