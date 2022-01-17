import Banner from "components/main/Banner";
import Share from "components/main/Share";
import type { NextPage } from "next";
<<<<<<< HEAD
import MainReview from "components/main/MainReview";
const Home: NextPage = () => {
  return (
    <div>
      <MainReview />
    </div>
=======

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Share />
    </>
>>>>>>> develop
  );
};

export default Home;
