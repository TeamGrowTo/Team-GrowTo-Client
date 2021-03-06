import SEO from "components/common/SEO";
import Banner from "components/main/Banner";
import MainLectureCategory from "components/main/LectureCategory";
import MainReport from "components/main/MainReport";
import MainReview from "components/main/MainReview";
import MainTo from "components/main/MainTo";
import MainToProcessButton from "components/main/MainToProcessButton";
import MainMission from "components/main/Share";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <SEO />
      <Banner />
      <MainLectureCategory />
      <MainToProcessButton />
      <MainMission />
      <MainTo />
      <MainReport />
    </div>
  );
};

export default Home;
