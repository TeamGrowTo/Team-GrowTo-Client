import Link from "next/link";
import { SmallArrowBlue } from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import { TagWrapper } from "../LargeCardBox/style";
import {
  ArrowWrapper,
  LectureInfoBox,
  LectureInfoData,
  LectureInfoName,
  LectureInfoWrapper,
  LectureTag,
  LectureTitleBox,
  LectureTitleName,
  MoveLinkButton,
  StyledRoot,
} from "./style";
interface Props {
  lecture: LectureDataType;
}
function SmallCardBox({ lecture }: Props) {
  const { LectureTitle, time, price, duration, reviewTime, startYear, tags, url } = lecture;

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
          <LectureInfoName>질문 응답시간</LectureInfoName>
          <LectureInfoData>{reviewTime}</LectureInfoData>
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
          <LectureInfoName>개설일</LectureInfoName>
          <LectureInfoData>{startYear === -1 ? "미표기" : startYear}</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <TagWrapper>
        {tags.map((tag) => (
          <LectureTag key={tag}>{tag}</LectureTag>
        ))}
      </TagWrapper>
    </StyledRoot>
  );
}

export default SmallCardBox;
