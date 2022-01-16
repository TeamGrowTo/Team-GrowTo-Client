import MainReport from "components/main/MainReport";
import type { NextPage } from "next";

import Banner from "components/main/banner";
import Share from "components/main/Share";
import type { NextPage } from "next";
import MainReview from "components/main/MainReview";

const Home: NextPage = () => {
  return (
    <div>
      <MainReview />
      <MainReport />
      <Banner />
      <Share />
    </div>
}

export default Home;
