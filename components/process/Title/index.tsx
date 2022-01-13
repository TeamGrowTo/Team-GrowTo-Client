import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { ProcessTitle, StyledRoot } from "./style";
function Title() {
  const router = useRouter();
  const PATH_NAME = router.pathname;

  const prevUrl =
    PATH_NAME === "/processPrice"
      ? "/processTime"
      : PATH_NAME === "/processTime"
      ? "/processTag"
      : "/";

  return (
    <StyledRoot>
      <Link href={prevUrl} passHref>
        &lt; 뒤로가기
      </Link>
      <ProcessTitle>맞춤 강의 찾기</ProcessTitle>
    </StyledRoot>
  );
}

export default Title;
