import Link from "next/link";
import { CalendarIcon, SmallArrowBlue, TimeIcon, VideoIcon } from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import { Tag } from "../LargeCardBox/style";
import {
  ArrowWrapper,
  LectureInfoBox,
  LectureInfoData,
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
          <MoveLinkButton target="_blank" rel="noopener noreferrer">
            <LectureTitleName>{LectureTitle}</LectureTitleName>
            <ArrowWrapper>
              <SmallArrowBlue />
            </ArrowWrapper>
          </MoveLinkButton>
        </Link>
      </LectureTitleBox>
      <LectureInfoBox>
        <LectureInfoWrapper>
          <VideoIcon />
          <LectureInfoData>{duration === 100000000 ? "무제한" : `${duration}일`}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <TimeIcon />
          <LectureInfoData>{time === -1 ? "미표기" : `${time}시간`}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <CalendarIcon />
          <LectureInfoData>{startYear === -1 ? "미표기" : startYear + "년 개설"}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <VideoIcon />
          <LectureInfoData>{(price / 10000).toFixed(1)}만원</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <VideoIcon />
          <LectureInfoData>{site}</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <TagWrapper>
        {tags.map((tag) => (
          <Tag key={tag.name} type={tag.type}>
            {tag.name}
          </Tag>
        ))}
      </TagWrapper>
    </StyledRoot>
  );
}

export default SmallCardBox;
