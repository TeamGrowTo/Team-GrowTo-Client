import Link from "next/link";
import { useRouter } from "next/router";
import { ProcessPrevIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import { ProcessTitle, StyledRoot } from "./style";
function Title() {
  const router = useRouter();
  const PATH_NAME = router.pathname;

  const prevUrl =
    PATH_NAME === "/processPrice"
      ? "/processTime"
      : PATH_NAME === "/processTime"
      ? "/processTag"
      : "/category";

  return (
    <StyledRoot>
      <Link href={prevUrl} passHref>
        <ProcessPrevIcon />
      </Link>
      <Screen desktop>
        <Link href={prevUrl} passHref>
          &nbsp; 뒤로가기
        </Link>
      </Screen>
      <ProcessTitle>맞춤 강의 찾기</ProcessTitle>
    </StyledRoot>
  );
}

export default Title;
