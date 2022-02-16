import Link from "next/link";
import { ArrowRight } from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import {
  InfoColumnWrapper,
  LectureDateBox,
  LectureInfoBox,
  LectureInfoData,
  LectureInfoLongName,
  LectureInfoShortName,
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
        <div>
          <LectureInfoWrapper>
            <LectureInfoShortName>총 소요시간</LectureInfoShortName>
            <LectureInfoData>{time === -1 ? "미표기" : `${time}시간`}</LectureInfoData>
          </LectureInfoWrapper>
          <LectureInfoWrapper>
            <LectureInfoShortName>가격</LectureInfoShortName>
            <LectureInfoData>{(price / 10000).toFixed(1)}만원</LectureInfoData>
          </LectureInfoWrapper>
        </div>
        <div>
          <LectureInfoWrapper>
            <LectureInfoLongName>질문 응답시간</LectureInfoLongName>
            <LectureInfoData>{reviewTime}</LectureInfoData>
          </LectureInfoWrapper>
          <LectureInfoWrapper>
            <LectureInfoLongName>반복 시청기간</LectureInfoLongName>
            <LectureInfoData>{duration === 100000000 ? "무제한" : `${duration}일`}</LectureInfoData>
          </LectureInfoWrapper>
        </div>
      </LectureInfoBox>
      <LectureDateBox>
        <LectureInfoShortName>개설일</LectureInfoShortName>
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
        <LectureLinkBtn target="_blank">
          <ArrowRight />
        </LectureLinkBtn>
      </Link>
    </StyledRoot>
  );
}

export default LargeCardBox;
