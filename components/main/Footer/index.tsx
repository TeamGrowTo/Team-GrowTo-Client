import Link from "next/link";
import { InstagramLogo, LogoIcon } from "public/assets/icons";
import React from "react";

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
              IT강의 비교 서비스 그로투입니다. <br />
              간편하고 빠르게 나에게 맞는 IT강의를 찾아보세요!
            </ServiceIntro>
          </ServiceIntroWrapper>
          <ServiceMenuBox>
            <ServiceMenuList>
              <ServiceMenuTitle>Service</ServiceMenuTitle>
              <ServiceMenuListItem>
                <Link href="/about">서비스 소개</Link>
              </ServiceMenuListItem>
            </ServiceMenuList>
            <ServiceMenuList>
              <ServiceMenuTitle>Contact Us</ServiceMenuTitle>
              <ServiceMenuListItem>
                <Link href="mailto:help.growto@gmail.com">기업 참여</Link>
              </ServiceMenuListItem>
              <ServiceMenuListItem>
                <Link href="mailto:help.growto@gmail.com">문의하기</Link>
              </ServiceMenuListItem>
            </ServiceMenuList>
            <ServiceMenuList>
              <ServiceMenuTitle>Social</ServiceMenuTitle>
              <ServiceMenuListItem>
                <a href="https://www.instagram.com/grow._.eleven/">
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
