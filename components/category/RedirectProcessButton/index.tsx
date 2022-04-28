import Image from "next/image";
import Link from "next/link";
import { CategoryToProcessIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import DesktopProcessButton from "./DesktopToProcessButton";
import MobileProcessButton from "./MobileToProcessButton";

const RedirectProcessButton = function () {
  return (
    <>
      <Screen desktop>
        <DesktopProcessButton />
      </Screen>
      <Screen mobile>
        <MobileProcessButton />
      </Screen>
    </>
  );
};

export default RedirectProcessButton;
