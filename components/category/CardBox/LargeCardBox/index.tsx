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

  return (
    <StyledRoot>
      <LectureTitleBox>
        <LectureTitleName>{LectureTitle}</LectureTitleName>
      </LectureTitleBox>
      <LectureInfoBox>
        <LectureInfoWrapper>
          <LectureInfoName>총 소요시간</LectureInfoName>
          <LectureInfoData>{time}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>질문 응답시간</LectureInfoName>
          <LectureInfoData>{reviewTime}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>가격</LectureInfoName>
          <LectureInfoData>{price}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <LectureInfoName>반복 시청 기간</LectureInfoName>
          <LectureInfoData>{duration}</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <LectureDateBox>
        <LectureInfoName>개설일</LectureInfoName>
        <LectureInfoData>{startYear}</LectureInfoData>
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
