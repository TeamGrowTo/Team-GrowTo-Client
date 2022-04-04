import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  box-sizing: border-box;
  width: 100vw;
  height: 104.125rem;
  max-width: 100%;
  background-color: ${colors.skyBlue};
  background-image: url("/assets/images/mainReportBackground.png");
  display: flex;
  justify-content: center;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    height: 22.6rem;
  }
`;

export const Wrapper = styled.div``;

export const ReportBox = styled.article`
  width: 96rem;
  height: 40rem;
  background: rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(4.2rem);
  border: 0.2rem solid #ffffff;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 14.6rem;
    border-radius: 1.8rem;
  }
`;

export const LineWrapper = styled.figure`
  margin-top: 1.4rem;
  ${applyMediaQuery("mobile")} {
    margin-top: 0;
  }
`;

export const ShareBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 14.6337rem;
  /* margin: 0 auto; */
  width: 96rem;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    & > p {
      color: ${colors.subBlack};
      font-size: 3.6rem;
      font-family: "Pretendard-ExtraBold";
      padding-top: 3.5rem;
      margin-left: 1.5rem;
      margin-right: 3rem;
    }
  }

  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    div > p {
      font-size: 1.8rem;
      font-family: "Pretendard-Bold";
      margin: 2rem;
    }
  }
`;

export const ShareButton = styled.button`
  width: 26rem;
  height: 8.8rem;
  background: ${colors.mainBlue};
  border-radius: 5rem;
  font-size: 2.4rem;
  font-family: "Pretendard-SemiBold";
  color: white;
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    width: 12rem;
    height: 4rem;
    font-size: 1.4rem;
  }
`;
