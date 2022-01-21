import RequestBanner from "components/request/RequestBanner";
import RequestCurrentLecture from "components/request/RequestCurrentLecture";
import RequestLecture from "components/request/RequestLecture";
import RequestWeeklyRank from "components/request/RequestWeeklyRank";
import type { NextPage } from "next";

const Request: NextPage = () => {
  return (
    <div>
      <RequestLecture />
      <RequestWeeklyRank />
      <RequestBanner />
      <RequestCurrentLecture />
    </div>
  );
};

export default Request;
