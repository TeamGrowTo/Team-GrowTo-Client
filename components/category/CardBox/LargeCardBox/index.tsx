import Link from "next/link";
import {
  BookmarkIcon,
  CalendarIcon,
  LikeIcon,
  MoveToIcon,
  TimeIcon,
  VideoIcon,
} from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import {
  CardTop,
  LectureInfo,
  LectureInfoBox,
  LectureInfoData,
  LectureInfoShortName,
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
  const { LectureTitle, time, price, duration, startYear, tags, url, site } = lecture;

  //총 소요시간 -1 : 미표기
  // 개설연도 -1 : 미표기
  // 반복시청 가능 기간 : 100,000,000 : 무제한
  // 가격단위 : 만원으로 변환 ex 19000원 => 1.9만원
  return (
    <StyledRoot>
      <CardTop>
        <LikeIcon />
        <BookmarkIcon />
      </CardTop>
      <Link href={url} passHref>
        <LectureTitleName href={url} target="_blank" rel="noreferrer">
          {LectureTitle}
        </LectureTitleName>
      </Link>
      <LectureInfoBox>
        <div>
          <VideoIcon />
          <LectureInfo>
            {duration === 100000000 ? "무제한 반복 시청 가능" : `${duration}일 시청 가능`}
          </LectureInfo>
        </div>
        <div>
          <TimeIcon />
          <LectureInfo>{time === -1 ? "미표기" : `총 ${time}시간`}</LectureInfo>
        </div>
        <div>
          <CalendarIcon />
          <LectureInfo>{startYear === -1 ? "미표기" : startYear}년 개설</LectureInfo>
        </div>
      </LectureInfoBox>
      <LectureTagBox>
        <TagWrapper>
          {tags.map((tag) => (
            <LectureTag key={tag}>{tag}</LectureTag>
          ))}
        </TagWrapper>
      </LectureTagBox>
      {(price / 10000).toFixed(1)}만원
      {site}
      <Link href={url} passHref>
        <a href={url} target="_blank" rel="noreferrer">
          <MoveToIcon />
        </a>
      </Link>
    </StyledRoot>
  );
}

export default LargeCardBox;
