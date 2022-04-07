import React from "react";

import AutoImageSlider from "./AutoImageSlider";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
const Banner = function () {
  return (
    <AutoImageSlider moveWidth="100vw">
      <FirstBanner></FirstBanner>
      <SecondBanner></SecondBanner>
    </AutoImageSlider>
  );
};

export default Banner;
