import React from "react";

import AutoImageSlider from "./AutoImageSlider";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";
const Banner = function () {
  return (
    <AutoImageSlider>
      <FirstBanner></FirstBanner>
      <SecondBanner></SecondBanner>
      <ThirdBanner></ThirdBanner>
    </AutoImageSlider>
  );
};

export default Banner;
