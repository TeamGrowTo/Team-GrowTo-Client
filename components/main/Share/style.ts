import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  width: 100%;
  height: 44.8rem;
  background: linear-gradient(180deg, #e6f0f4 -5.17%, #e3e9f9 95%);
  font-family: "Pretendard-Regular";
  ${applyMediaQuery("mobile")} {
    height: 34.6rem;
  }
  text-align: center;
`;

export const Background = styled.div`
  background-image: url("/assets/images/mainMissionBackground.png");
  height: 100%;
  background-size: cover;
`;

export const OurMission = styled.h3`
  padding-top: 8rem;
  font-family: "Poppins-Bold";
  color: ${colors.mildBlack};
  font-size: 3.6rem;
`;

export const ShareBox = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 94.8rem;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
  }
`;

export const StoryLink = styled.a`
  margin-bottom: 1.6rem;
  text-align: right;
  color: ${colors.subBlack};
  font-family: "Pretendard-Medium";
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    margin-top: 3.5rem;
  }
`;
export const Slogan = styled.div`
  width: 96rem;
  height: 18.4rem;
  padding: 5.4rem;

  border-radius: 2.6rem;
  background: rgb(255, 255, 255, 0.7);
  font-family: "Pretendard-SemiBold";
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
  color: ${colors.gray6};
  & > p {
    margin: auto;
    font-size: 2.6rem;
    line-height: 3.8rem;
    font-family: "Pretendard-Regular";
    color: ${colors.gray6};
    line-height: 3.8rem;
  }
  & > p > span {
    font-family: "Pretendard-Medium";
    color: ${colors.mainBlue};
  }
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 9.7rem;
    padding: 1.6rem;
    font-family: "Pretendard-Regular";
    margin-bottom: 4.8rem;
    & > p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    & > p:last-child {
      font-size: 1.2rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    color: ${colors.subBlack};
    font-size: 3.6rem;
    font-family: "Pretendard-ExtraBold";
    margin: 3.2rem;
  }
  & > p > span {
    color: ${colors.mainBlue};
  }
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    & > p {
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
