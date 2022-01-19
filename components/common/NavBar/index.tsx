import React from "react";
import Screen from "styles/Screen";

import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

function NavBar() {
  return;
  <>
    <Screen desktop>
      <LargeNavBar />
    </Screen>
    <Screen mobile>
      <SmallNavBar />
    </Screen>
    ;
  </>;
}

export default NavBar;
