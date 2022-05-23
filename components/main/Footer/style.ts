import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.footer`
  height: 38rem;
  padding: 7.6rem 2.5rem 6rem 2.5rem;
  background-color: ${colors.gray0};
  border-top: solid 1px ${colors.gray2};
  display: flex;
  justify-content: center;
  ${applyMediaQuery("mobile")} {
    padding: 7.6rem 0rem 6rem 0;
    padding-top: 0rem;
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 128rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${applyMediaQuery("mobile")} {
    max-width: 40rem;
  }
`;

export const FooterTop = styled.div`
  border-bottom: solid 1px ${colors.gray3};
  padding-bottom: 6.2rem;
  display: flex;
  justify-content: space-between;
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    padding-bottom: 2.3rem;
  }
`;

export const CopyRight = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  color: ${colors.gray5};
  ${applyMediaQuery("mobile")} {
    text-align: center;
  }
`;

export const ServiceIntroWrapper = styled.div`
  margin-top: 0.2rem;
  margin-right: 4.5rem;
  min-width: 31.5rem;
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("mobile")} {
    margin: 3.6rem auto 1.2rem;
    align-items: center;
  }
`;

export const ServiceIntro = styled.p`
  margin-top: 3.4rem;
  font-family: "Pretendard-Medium";
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${colors.gray5};
  ${applyMediaQuery("mobile")} {
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: 2.9rem;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 36rem;
  min-width: 9.5rem;
  & + & {
    margin-left: 4.5rem;
  }
  ${applyMediaQuery("mobile")} {
    flex-direction: row;
    justify-content: space-evenly;
    min-width: 6rem;
    width: unset;
    & + & {
      margin-left: 1rem;
    }
  }
`;

export const MenuTitle = styled.h4`
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${colors.gray3};
  margin-bottom: 2.8rem;
`;

export const MenuListItem = styled.li`
  font-family: "Pretendard-Regular";
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: ${colors.gray5};
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
  }
`;

export const ItemWrapper = styled.span`
  ${applyMediaQuery("mobile")} {
    display: contents;
  }
`;
