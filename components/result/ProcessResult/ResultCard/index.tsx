import { LectureTitle, MoreButton, StyledRoot } from "./style";
import React from "react";
import Link from "next/link";
import Info from "./Info";
import SubInfo from "./SubInfo";
import Tags from "./Tags";
import { LeftArrowIcon } from "public/assets/icons";

type Answer = "fast" | "middle" | "slow";
interface ProcessResultData {
  id: number;
  lectureName: string;
  time: number;
  price: number;
  createdDate: number;
  replay: boolean;
  answer: Answer;
  tags: string[];
  url: string;
}

type Props = {
  result: ProcessResultData;
};

const ResultCard = function ({ result }: Props) {
  const { lectureName, time, price, createdDate, replay, answer, tags, url } = result;
  return (
    <StyledRoot>
      <LectureTitle>{lectureName}</LectureTitle>
      <Info time={time} price={price} createdDate={createdDate} />
      <SubInfo replay={replay} answer={answer} />
      <Tags tags={tags} />
      <MoreButton href={url}>
        더보기
        <LeftArrowIcon />
      </MoreButton>
    </StyledRoot>
  );
};

export default ResultCard;
