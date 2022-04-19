import Link from "next/link";
import {
  // BookmarkIcon,
  CalendarIcon,
  // LikeIcon,
  MoveToIcon,
  TimeIcon,
  VideoIcon,
} from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import {
  CardBottom,
  CardTop,
  LectureInfo,
  LectureInfoBox,
  Price,
  PriceUnit,
  Site,
  StyledRoot,
  Tag,
  TagWrapper,
  TitleBox,
  TitleName,
} from "./style";

interface Props {
  lecture: LectureDataType;
}

function LargeCardBox({ lecture }: Props) {
  const { LectureTitle, time, price, duration, startYear, tags, url, site } = lecture;

  //todo(1) : 제목 고정영역 벗어나면 ...처리 (4줄이상 제목) O
  //todo(2) : 가격 단위 반점 찍기 => O toLocaleString으로 해결
  //todo(3) : 태그 종류별로 4가지 색 분류
  //todo(4) : 강의마지막 리스트 왼쪽 정렬되게 하기
  //todo(5) : 태그영역 벗어날 시 스크롤 O ( 스크롤 커스텀 )

  //총 소요시간 = time -1 : 미표기
  // 개설연도 = startYear -1 : 미표기
  // 수강 기간 = duration : 100,000,000 : 무제한
  return (
    <StyledRoot>
      {/* <CardTop>
        <LikeIcon />
        <BookmarkIcon />
      </CardTop> */}
      <TitleBox href={url} passHref>
        <TitleName href={url} target="_blank" rel="noopener noreferrer">
          {LectureTitle}
        </TitleName>
      </TitleBox>
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
          <LectureInfo>{startYear === -1 ? "미표기" : startYear + "년 개설"}</LectureInfo>
        </div>
      </LectureInfoBox>
      <TagWrapper>
        {tags.map((tag) => (
          <Tag key={tag.name} type={tag.type}>
            {tag.name}
          </Tag>
        ))}
      </TagWrapper>
      <Link href={url} passHref>
        <a href={url} target="_blank" rel="noreferrer">
          <CardBottom>
            <Site>{site}</Site>
            <div>
              <Price>{price.toLocaleString("ko-KR")}</Price>
              <PriceUnit>원</PriceUnit>
              <MoveToIcon />
            </div>
          </CardBottom>
        </a>
      </Link>
    </StyledRoot>
  );
}

export default LargeCardBox;
