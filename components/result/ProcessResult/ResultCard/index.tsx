import Link from "next/link";
import { MobileResultCardRightArrowIcon, ResultCardLeftArrowIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";
import { LectureResultData } from "types/lectures.type";

import Info from "./Info";
import { LectureTitle, MoreButton, StyledRoot } from "./style";
import SubInfo from "./SubInfo";
import Tags from "./Tags";

type Props = {
  result: LectureResultData;
};

function ResultCard({ result }: Props) {
  const { name, time, price, createdDate, replay, answer, tags, url } = result;

  return (
    <StyledRoot>
      <LectureTitle>{name}</LectureTitle>
      <Info time={time} price={price} createdDate={createdDate} />
      <SubInfo replay={replay} answer={answer} />
      <Tags tags={tags} />
      <Link href={url} passHref>
        <MoreButton target="_blank">
          더보기
          <Screen desktop>
            <ResultCardLeftArrowIcon />
          </Screen>
          <Screen mobile>
            <MobileResultCardRightArrowIcon />
          </Screen>
        </MoreButton>
      </Link>
    </StyledRoot>
  );
}

export default ResultCard;
