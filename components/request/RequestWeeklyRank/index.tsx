import { getLectureWeeklyRank } from "apis/lectures.api";
import React, { useEffect, useState } from "react";
import { LectureRankData } from "types/lectures.type";

import Rank from "./Rank";
import { RankList, StyledRoot, Title, Wrapper } from "./style";

export default function RequestWeeklyRank() {
  const [weeklyRank, setweeklyRank] = useState<LectureRankData[] | null>([]);

  const weeklyLectureRank = async () => {
    const data = await getLectureWeeklyRank();

    data && setweeklyRank(data);
  };

  useEffect(() => {
    weeklyLectureRank();
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
