import SEO from "components/common/SEO";
import Banner from "components/main/Banner";
import MainLectureCategory from "components/main/LectureCategory";
import MainReport from "components/main/MainReport";
import MainReview from "components/main/MainReview";
import MainToProcessButton from "components/main/MainToProcessButton";
import Share from "components/main/Share";
import type { NextPage } from "next";
import { useResetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureDataList,
} from "store/state";

const Home: NextPage = () => {
  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetIsSelected = useResetRecoilState(isSelectedState);
  const resetCurrentCategoryData = useResetRecoilState(currentCategoryState);
  const resetCurrentSkillData = useResetRecoilState(currentSkillState);

  const resetData = () => {
    resetCurrentCategoryData();
    resetCurrentSkillData();
    resetLectureListData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
    resetIsSelected();
  };

  return (
    <div>
      <SEO />
      <Banner />
      <MainLectureCategory resetData={resetData} />
      <MainToProcessButton resetData={resetData} />
      <MainReport />
      <MainReview />
      <Share />
    </div>
  );
};

export default Home;
