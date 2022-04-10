import Link from "next/link";
import { SmallArrowBlue } from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import { Tag } from "../LargeCardBox/style";
import {
  ArrowWrapper,
  LectureInfoBox,
  LectureInfoData,
  LectureInfoName,
  LectureInfoWrapper,
  // LectureTag,
  LectureTitleBox,
  LectureTitleName,
  MoveLinkButton,
  StyledRoot,
  TagWrapper,
} from "./style";
interface Props {
  lecture: LectureDataType;
}
function SmallCardBox({ lecture }: Props) {
  const { LectureTitle, time, site, price, duration, startYear, tags, url } = lecture;

  return (
    <StyledRoot>
      <LectureTitleBox>
        <Link href={url} passHref>
          <MoveLinkButton target="_blank">
            <LectureTitleName>{LectureTitle}</LectureTitleName>
            <ArrowWrapper>
              <SmallArrowBlue />
            </ArrowWrapper>
          </MoveLinkButton>
        </Link>
      </LectureTitleBox>
      <LectureInfoBox>
        <LectureInfoWrapper>
          <LectureInfoName>총 소요시간</LectureInfoName>
          <LectureInfoData>{time === -1 ? "미표기" : `${time}시간`}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>개설일</LectureInfoName>
          <LectureInfoData>{startYear === -1 ? "미표기" : startYear}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>가격</LectureInfoName>
          <LectureInfoData>{(price / 10000).toFixed(1)}만원</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>수강 기간</LectureInfoName>
          <LectureInfoData>{duration === 100000000 ? "무제한" : `${duration}일`}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>강의 사이트</LectureInfoName>
          <LectureInfoData>{site}</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <TagWrapper>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagWrapper>
    </StyledRoot>
  );
}

export default SmallCardBox;
