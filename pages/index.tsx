import Banner from "components/main/Banner";
import MainLectureCategory from "components/main/LectureCategory";
import Share from "components/main/Share";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <MainLectureCategory />
      <Share />
    </>
  );
};

export default Home;
