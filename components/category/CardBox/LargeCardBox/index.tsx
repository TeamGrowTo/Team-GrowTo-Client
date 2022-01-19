import Link from "next/link";
import { ArrowRight } from "public/assets/icons";
import React from "react";
import { LectureDataType, ResponseLectureDataType } from "types/info.type";

import {
  LectureDateBox,
  LectureInfoBox,
  LectureInfoData,
  LectureInfoName,
  LectureInfoWrapper,
  LectureLinkBtn,
  LectureTag,
  LectureTagBox,
  LectureTitleBox,
  LectureTitleName,
  StyledRoot,
  TagWrapper,
} from "./style";

interface Props {
  lecture: LectureDataType;
}

function LargeCardBox({ lecture }: Props) {
  const { LectureTitle, time, price, duration, reviewTime, startYear, tags, url } = lecture;

  return (
    <StyledRoot>
      <LectureTitleBox>
        <LectureTitleName>퍼포먼스 마케팅 데이터로 완전 정복, {LectureTitle}</LectureTitleName>
      </LectureTitleBox>
      <LectureInfoBox>
        <LectureInfoWrapper>
          <LectureInfoName>총 소요시간</LectureInfoName>
          <LectureInfoData>55시간 {time}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>질문 응답시간</LectureInfoName>
          <LectureInfoData>빠름{reviewTime}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>가격</LectureInfoName>
          <LectureInfoData>20만원 {price}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>반복 시청 기간</LectureInfoName>
          <LectureInfoData>무제한{duration}</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <LectureDateBox>
        <LectureInfoName>개설일</LectureInfoName>
        <LectureInfoData>2022{startYear}</LectureInfoData>
      </LectureDateBox>
      <LectureTagBox>
        <TagWrapper>
          {tags.map((tag) => (
            <LectureTag key={tag}>{tag}</LectureTag>
          ))}
          <LectureTag>실습프로젝트20종</LectureTag>
          <LectureTag>광고집행툴</LectureTag>
          <LectureTag>앱 마케팅</LectureTag>
          <LectureTag>데이터수집추적분석툴</LectureTag>
          <LectureTag>웹 최적화</LectureTag>
        </TagWrapper>
      </LectureTagBox>
      <Link href={url} passHref>
        <LectureLinkBtn>
          <ArrowRight />
        </LectureLinkBtn>
      </Link>
    </StyledRoot>
  );
}

export default LargeCardBox;
