import Link from "next/link";
import { useRouter } from "next/router";
import { LogoIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import { LogoWrapper, NavItem, NavItemBox, NavItemWrapper, StyledRoot } from "./style";

function LargeNavBar() {
  const router = useRouter();

  return (
    <StyledRoot>
      <NavItemBox>
        <Link href="/" passHref>
          <LogoWrapper>
            <LogoIcon />
          </LogoWrapper>
        </Link>
        <NavItemWrapper>
          <Link href="/category" passHref>
            <NavItem pathName={router.pathname} href="/category">
              전체강의
            </NavItem>
          </Link>
          <Link href="/request" passHref>
            <NavItem pathName={router.pathname} href="/request">
              비교요청
            </NavItem>
          </Link>
          <Link
            href="https://lud2ns.notion.site/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
            passHref
          >
            <NavItem
              target="_blank"
              pathName={router.pathname}
              href="https://lud2ns.notion.site/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
            >
              ABOUT
            </NavItem>
          </Link>
        </NavItemWrapper>
      </NavItemBox>
    </StyledRoot>
  );
}

export default LargeNavBar;
