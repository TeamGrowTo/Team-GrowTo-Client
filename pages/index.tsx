<<<<<<< HEAD
import MainReport from "components/main/MainReport";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return <div>{/* <MainReport /> */}</div>;
=======
import Banner from "components/main/banner";
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
>>>>>>> develop
};

export default Home;
