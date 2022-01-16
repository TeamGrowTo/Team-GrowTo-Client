import RequestBanner from "components/request/RequestBanner";
import RequestLecture from "components/request/RequestLecture";
import RequestWeeklyRank from "components/request/RequestWeeklyRank";
import type { NextPage } from "next";

const Request: NextPage = () => {
  return (
    <div>
      <RequestLecture />
      <RequestWeeklyRank />
      <RequestBanner />
    </div>
  );
};

export default Request;
