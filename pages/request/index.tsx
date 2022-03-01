import SEO from "components/common/SEO";
import RequestBanner from "components/request/RequestBanner";
import RequestCurrentLecture from "components/request/RequestCurrentLecture";
import RequestLecture from "components/request/RequestLecture";
import RequestWeeklyRank from "components/request/RequestWeeklyRank";
import type { NextPage } from "next";

const Request: NextPage = () => {
  return (
    <div>
      <SEO
        title="그로투 - 비교 요청 하기"
        content="비교를 원하는 IT강의가 있다면 그로투에 요청하세요"
      />
      <RequestLecture />
      <RequestWeeklyRank />
      <RequestBanner />
      <RequestCurrentLecture />
    </div>
  );
};

export default Request;
