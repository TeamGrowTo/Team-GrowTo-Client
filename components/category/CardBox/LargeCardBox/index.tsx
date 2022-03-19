import Link from "next/link";
import { ArrowRight } from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import {
  LectureInfoBox,
  LectureInfoData,
  LectureInfoLongName,
  LectureInfoShortName,
  LectureInfoWrapper,
  LectureLinkBtn,
  LectureSiteBox,
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
      <LectureTitleBox>
        <LectureTitleName>
          <Link href={url} passHref>
            <a href={url} target="_blank" rel="noreferrer">
              {LectureTitle}
            </a>
          </Link>
        </LectureTitleName>
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
            <LectureInfoLongName>개설일</LectureInfoLongName>
            <LectureInfoData>{startYear === -1 ? "미표기" : startYear}</LectureInfoData>
          </LectureInfoWrapper>
          <LectureInfoWrapper>
            <LectureInfoLongName>수강 기간</LectureInfoLongName>
            <LectureInfoData>{duration === 100000000 ? "무제한" : `${duration}일`}</LectureInfoData>
          </LectureInfoWrapper>
        </div>
      </LectureInfoBox>
      <LectureSiteBox>
        <LectureInfoShortName>강의 사이트</LectureInfoShortName>
        <LectureInfoData>{site}</LectureInfoData>
      </LectureSiteBox>
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
