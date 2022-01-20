import Link from "next/link";
import { ArrowRight } from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

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

  console.log(duration, typeof duration);

  //총 소요시간 -1 : 미표기
  // 개설연도 -1 : 미표기
  // 반복시청 가능 기간 : 100,000,000 : 무제한
  // 가격단위 : 만원으로 변환 ex 19000원 => 1.9만원
  return (
    <StyledRoot>
      <LectureTitleBox>
        <LectureTitleName>{LectureTitle}</LectureTitleName>
      </LectureTitleBox>
      <LectureInfoBox>
        <LectureInfoWrapper>
          <LectureInfoName>총 소요시간</LectureInfoName>
          <LectureInfoData>{time === -1 ? "미표기" : `${time}시간`}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>질문 응답시간</LectureInfoName>
          <LectureInfoData>{reviewTime}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>가격</LectureInfoName>
          <LectureInfoData>{(price / 10000).toFixed(1)}만원</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>반복 시청 기간</LectureInfoName>
          <LectureInfoData>{duration === 100000000 ? "무제한" : `${duration}일`}</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <LectureDateBox>
        <LectureInfoName>개설일</LectureInfoName>
        <LectureInfoData>{startYear === -1 ? "미표기" : startYear}</LectureInfoData>
      </LectureDateBox>
      <LectureTagBox>
        <TagWrapper>
          {tags.map((tag) => (
            <LectureTag key={tag}>{tag}</LectureTag>
          ))}
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
