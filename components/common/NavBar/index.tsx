import React from "react";
import Screen from "styles/Screen";

import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

function NavBar() {
  return (
    <>
      <Screen mobile>
        <SmallNavBar />
      </Screen>
      <Screen desktop>
        <LargeNavBar />
      </Screen>
    </>
  );
}

export default NavBar;
