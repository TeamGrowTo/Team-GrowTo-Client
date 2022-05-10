import React from "react";

import AutoImageSlider from "./AutoImageSlider";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";

function Banner() {
  return (
    <AutoImageSlider>
      <FirstBanner></FirstBanner>
      <SecondBanner></SecondBanner>
    </AutoImageSlider>
  );
}

export default Banner;
