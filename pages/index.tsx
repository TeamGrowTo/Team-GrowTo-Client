import Banner from "components/main/Banner";
import MainReport from "components/main/MainReport";
import MainReview from "components/main/MainReview";
import Share from "components/main/Share";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <MainReport />
      <MainReview />
      <Share />
    </>
  );
};

export default Home;
