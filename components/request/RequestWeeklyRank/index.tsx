import { getLectureWeeklyRank } from "pages/apis/lectures.api";
import React, { useEffect, useState } from "react";
import { LectureRankData } from "types/lectures.type";

import Rank from "./Rank";
import { RankList, StyledRoot, Title, Wrapper } from "./style";

export default function RequestWeeklyRank() {
  // const rankInfo = [
  //   {
  //     id: 1,
  //     name: "데이터",
  //     skill: "데이터",
  //     number: 88,
  //   },
  //   {
  //     id: 2,
  //     name: "데이터",
  //     skill: "SQL 기초",
  //     number: 88,
  //   },
  //   {
  //     id: 3,
  //     name: "개발",
  //     skill: "파이썬",
  //     number: 78,
  //   },
  //   {
  //     id: 4,
  //     name: "디자인",
  //     skill: "피그마",
  //     number: 68,
  //   },
  // ];

  const [weeklyRank, setweeklyRank] = useState<LectureRankData[] | null>([]);

  const test = async () => {
    const data = await getLectureWeeklyRank();

    data && setweeklyRank(data);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>비교요청 주간 인기순위</h2>
          <p>100명 이상 비교를 요청하면 그로투가 비교를 시작해요!</p>
        </Title>
        <RankList>
          {weeklyRank?.map((rank, index) => (
            <Rank rank={rank} key={rank.id} rankNumber={index} />
          ))}
        </RankList>
      </Wrapper>
    </StyledRoot>
  );
}
