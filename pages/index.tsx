import Banner from "components/main/Banner";
import MainReview from "components/main/MainReview";
import Share from "components/main/Share";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <MainReview />
      <Share />
    </div>
  );
};

export default Home;
