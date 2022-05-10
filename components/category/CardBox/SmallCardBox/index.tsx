import Link from "next/link";
import { CalendarIcon, MoveToIcon, TimeIcon, VideoIcon } from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import { CardBottom, Price, PriceUnit, Site, Tag } from "../LargeCardBox/style";
import {
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
          </MoveLinkButton>
        </Link>
      </LectureTitleBox>
      <LectureInfoBox>
        <LectureInfoWrapper>
          <VideoIcon />
          <LectureInfoData>
            {duration === 100000000 ? "무제한 반복" : `${duration}일`}시청 가능
          </LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <TimeIcon />
          <LectureInfoData>{time === -1 ? "미표기" : `총 ${time}시간`}</LectureInfoData>
        </LectureInfoWrapper>
        <LectureInfoWrapper>
          <CalendarIcon />
          <LectureInfoData>{startYear === -1 ? "미표기" : startYear + "년 개설"}</LectureInfoData>
        </LectureInfoWrapper>
      </LectureInfoBox>
      <TagWrapper>
        {tags.map((tag) => (
          <Tag key={tag.name} type={tag.type}>
            {tag.name}
          </Tag>
        ))}
      </TagWrapper>
      <CardBottom>
        <Site>{site}</Site>
        <div>
          <Price>{price.toLocaleString("ko-KR")}</Price>
          <PriceUnit>원</PriceUnit>
          <MoveToIcon />
        </div>
      </CardBottom>
    </StyledRoot>
  );
}

export default SmallCardBox;
