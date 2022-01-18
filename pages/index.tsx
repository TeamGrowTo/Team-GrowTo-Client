import Banner from "components/main/Banner";
import MainReview from "components/main/MainReview";
import Share from "components/main/Share";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <MainReview />
      <Share />
      <MainReview />
    </>
  );
};

export default Home;
