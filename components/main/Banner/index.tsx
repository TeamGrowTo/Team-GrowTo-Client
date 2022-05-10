import React from "react";

import AutoImageSlider from "./AutoImageSlider";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";
function Banner() {
  return (
    <AutoImageSlider>
      <FirstBanner></FirstBanner>
      <SecondBanner></SecondBanner>
      <ThirdBanner></ThirdBanner>
    </AutoImageSlider>
  );
}

export default Banner;
