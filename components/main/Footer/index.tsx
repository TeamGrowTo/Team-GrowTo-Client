import Link from "next/link";
import { InstagramLogo, LogoIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import {
  CopyRight,
  FooterContainer,
  FooterTop,
  ServiceIntro,
  ServiceIntroWrapper,
  ServiceMenuBox,
  ServiceMenuList,
  ServiceMenuListItem,
  ServiceMenuTitle,
  StyledRoot,
} from "./style";
function Footer() {
  return (
    <StyledRoot>
      <FooterContainer>
        <FooterTop>
          <ServiceIntroWrapper>
            <LogoIcon />
            <ServiceIntro>
              IT강의 비교 서비스, 그로투
              <br />
              강의 찾는 시간 줄이고 성장에만 집중하세요
            </ServiceIntro>
          </ServiceIntroWrapper>
          <ServiceMenuBox>
            <ServiceMenuList>
              <Screen desktop>
                <ServiceMenuTitle>Service</ServiceMenuTitle>
              </Screen>
              <ServiceMenuListItem>
                <Link href="https://www.notion.so/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161">
                  <a
                    href="https://www.notion.so/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
                    target="_blank"
                    rel="noreferrer"
                  >
                    서비스 소개
                  </a>
                </Link>
              </ServiceMenuListItem>
            </ServiceMenuList>
            <ServiceMenuList>
              <Screen desktop>
                <ServiceMenuTitle>Contact Us</ServiceMenuTitle>
              </Screen>
              <ServiceMenuListItem>
                <Link href="mailto:go.growto@gmail.com">기업 참여</Link>
              </ServiceMenuListItem>
              <ServiceMenuListItem>
                <Link href="mailto:go.growto@gmail.com">문의하기</Link>
              </ServiceMenuListItem>
            </ServiceMenuList>
            <ServiceMenuList>
              <Screen desktop>
                <ServiceMenuTitle>Social</ServiceMenuTitle>
              </Screen>
              <ServiceMenuListItem>
                <a
                  href="https://www.instagram.com/growto.official/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo />
                </a>
              </ServiceMenuListItem>
            </ServiceMenuList>
          </ServiceMenuBox>
        </FooterTop>
        <CopyRight>© 2022 Growto, Inc.</CopyRight>
      </FooterContainer>
    </StyledRoot>
  );
}

export default Footer;
