import Link from "next/link";
import { RedirectRequestArrowIcon } from "public/assets/icons";

import { LinkWrapper, RedirectRequestPage } from "./style";

function CategoryToRequest() {
  return (
    <LinkWrapper>
      <Link href="/request" passHref>
        <RedirectRequestPage>
          <span>추가로 비교 원하는 분야가 있다면?</span>
          <RedirectRequestArrowIcon />
        </RedirectRequestPage>
      </Link>
    </LinkWrapper>
  );
}

export default CategoryToRequest;
