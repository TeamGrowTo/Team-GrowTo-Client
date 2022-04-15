import React from "react";

import AutoImageSlider from "./AutoImageSlider";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";
const Banner = function () {
  return (
    <AutoImageSlider moveWidth="100vw">
      <ThirdBanner></ThirdBanner>
      <FirstBanner></FirstBanner>
      <SecondBanner></SecondBanner>
      <ThirdBanner></ThirdBanner>
      <FirstBanner></FirstBanner>
    </AutoImageSlider>
  );
};

export default Banner;
