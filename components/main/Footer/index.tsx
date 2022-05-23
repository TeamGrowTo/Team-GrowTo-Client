import Link from "next/link";
import { InstagramLogo, LogoIcon } from "public/assets/icons";
import React from "react";
import Screen from "styles/Screen";

import {
  CopyRight,
  FooterContainer,
  FooterTop,
  ItemWrapper,
  MenuList,
  MenuListItem,
  MenuTitle,
  ServiceIntro,
  ServiceIntroWrapper,
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
          <MenuList>
            <div>
              <Screen desktop>
                <MenuTitle>Service</MenuTitle>
              </Screen>
              <MenuListItem>
                <Link href="https://www.notion.so/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161">
                  <a
                    href="https://www.notion.so/lud2ns/ABOUT-_-Growto-9f2bd2594f914160b0ff08397a78a161"
                    target="_blank"
                    rel="noreferrer"
                  >
                    서비스 소개
                  </a>
                </Link>
              </MenuListItem>
            </div>
            <ItemWrapper>
              <Screen desktop>
                <MenuTitle>Contact Us</MenuTitle>
              </Screen>
              <MenuListItem>
                <Link href="mailto:go.growto@gmail.com">기업 참여</Link>
              </MenuListItem>
              <MenuListItem>
                <Link href="mailto:go.growto@gmail.com">문의하기</Link>
              </MenuListItem>
            </ItemWrapper>
            <div>
              <Screen desktop>
                <MenuTitle>Social</MenuTitle>
              </Screen>
              <MenuListItem>
                <a
                  href="https://www.instagram.com/growto.official/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo />
                </a>
              </MenuListItem>
            </div>
          </MenuList>
        </FooterTop>
        <CopyRight>© 2022 Growto, Inc.</CopyRight>
      </FooterContainer>
    </StyledRoot>
  );
}

export default Footer;
