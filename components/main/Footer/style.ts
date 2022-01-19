import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
const StyledRoot = styled.section`
  height: 38rem;
  padding: 7.6rem 2.5rem 6rem 2.5rem;
  background-color: ${colors.gray0};
  display: flex;
  justify-content: center;
  ${applyMediaQuery("mobile")} {
    padding-top: 0rem;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 128rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${applyMediaQuery("mobile")} {
    max-width: 40rem;
  }
`;

const FooterTop = styled.div`
  border-bottom: solid 1px ${colors.gray3};
  padding-bottom: 6.2rem;
  display: flex;
  justify-content: space-between;
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    padding-bottom: 2.3rem;
  }
`;

const CopyRight = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  color: ${colors.gray5};
  ${applyMediaQuery("mobile")} {
    text-align: center;
  }
`;

const ServiceIntroWrapper = styled.div`
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

const ServiceIntro = styled.p`
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

const ServiceMenuBox = styled.div`
  width: 45.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ServiceMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 9.5rem;
  & + & {
    margin-left: 4.5rem;
  }
  ${applyMediaQuery("mobile")} {
    flex-direction: row;
    min-width: 6rem;
    & + & {
      margin-left: 1rem;
    }
  }
`;

const ServiceMenuTitle = styled.h4`
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${colors.gray3};
  margin-bottom: 2.8rem;
`;

const ServiceMenuListItem = styled.li`
  font-family: "Pretendard-Regular";
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: ${colors.gray5};
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    & + & {
      margin-left: 7rem;
    }
  }
`;

export {
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
};
