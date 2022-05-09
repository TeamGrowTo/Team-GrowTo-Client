import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  width: 100%;
  margin-bottom: 14.8rem;
  margin-top: 15.4rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 6.4rem;
    margin-top: 5rem;
  }
`;

export const MainToCategory = styled.section`
  width: 102.8rem;
  height: 44rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    flex-direction: column;
    margin: 0 auto 7.6rem 2.4rem:
  }
`;

export const CircleWrapper = styled.div`
  margin-right: 4.25rem;
  & < img {
    width: 44rem;
    height: 44rem;
    ${applyMediaQuery("mobile")} {
      width: 21rem;
      height: 21rem;
    }
  }
  ${applyMediaQuery("mobile")} {
    margin-right: 2.5rem;
  }
`;

export const ArrowToCircleWrapper = styled.div`
  margin-right: 4.5rem;
  width: 10.8rem;
  height: 8rem;
  ${applyMediaQuery("mobile")} {
    margin-right: 0;
    width: 6.6rem;
    height: 4.7rem;
  }
`;

export const MobileCircleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryComment = styled.div`
  width: 60rem;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
  }
  & > div {
    display: flex;
    align-items: center;
    & > p {
      color: ${colors.blue7};
      font-size: 1.6rem;
      font-family: "Pretendard-Medium";
      margin-left: 0.9rem;
      ${applyMediaQuery("mobile")} {
        font-size: 1.1rem;
      }
    }
    & > img {
      ${applyMediaQuery("mobile")} {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
  & > p:nth-child(2) {
    color: ${colors.mildBlack};
    font-family: "Pretendard-Bold";
    font-size: 4.8rem;
    margin-top: 1.6rem;
    ${applyMediaQuery("mobile")} {
      margin-top: 1.2rem;
      font-size: 2.8rem;
    }
  }
  & > p:nth-child(3) {
    color: ${colors.gray6};
    font-family: "Pretendard-Bold";
    font-size: 3.2rem;
    margin-top: 1rem;
    line-height: 4.6rem;
    ${applyMediaQuery("mobile")} {
      margin-top: 0.8rem;
      font-size: 1.6rem;
      line-height: 2.3rem;
    }
  }
  & > button {
    width: 26.8rem;
    height: 5.4rem;
    border-radius: 4.8rem;
    background-color: ${colors.mainBlue};
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5.6rem;
    :hover {
      cursor: pointer;
    }
    ${applyMediaQuery("mobile")} {
      width: 16.3rem;
      height: 3.7rem;
      font-size: 1.4rem;
      font-family: "Pretendard-SemiBold";
      margin-top: 3.2rem;
      margin-bottom: 3.6rem;
    }
  }
`;

export const MainToProcess = styled.section`
  width: 102.8rem;
  height: 44rem;
  margin: 12.5rem auto 7.7rem;
  display: flex;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    flex-direction: column;
    margin-bottom: 6.4rem;
  }
`;

export const ResultCardComment = styled.div`
  width: 50rem;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    margin: 0 auto;
  }
  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & > p {
      text-align: right;
      color: ${colors.blue7};
      font-size: 1.6rem;
      font-family: "Pretendard-Medium";
      margin-left: 0.9rem;
      ${applyMediaQuery("mobile")} {
        font-size: 1.1rem;
      }
    }
    & > img {
      ${applyMediaQuery("mobile")} {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
  & > p:nth-child(2) {
    text-align: right;
    color: ${colors.mildBlack};
    font-family: "Pretendard-Bold";
    font-size: 4.8rem;
    margin-top: 1.6rem;
    ${applyMediaQuery("mobile")} {
      margin-top: 1.2rem;
      font-size: 2.8rem;
    }
  }
  & > p:nth-child(3) {
    text-align: right;
    margin-left: auto;
    color: ${colors.gray6};
    font-family: "Pretendard-Bold";
    font-size: 3.2rem;
    margin-top: 1rem;
    line-height: 4.6rem;
    ${applyMediaQuery("mobile")} {
      margin-top: 0.8rem;
      font-size: 1.6rem;
      line-height: 2.3rem;
    }
  }
  & > button {
    margin-left: auto;
    width: 26.8rem;
    height: 5.4rem;
    border-radius: 4.8rem;
    background-color: ${colors.mainBlue};
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5.6rem;
    :hover {
      cursor: pointer;
    }
    ${applyMediaQuery("mobile")} {
      width: 16.3rem;
      height: 3.7rem;
      font-size: 1.4rem;
      font-family: "Pretendard-SemiBold";
      margin-top: 3.2rem;
      margin-bottom: 3.6rem;
    }
  }
`;

export const ResultCardWrapper = styled.div`
  width: 66rem;
  height: 44rem;
  margin-left: 11rem;
  ${applyMediaQuery("mobile")} {
    margin: 0 auto;
    width: 32.8rem;
    height: 21.2rem;
  }
`;

export const MainToStory = styled.section`
  width: 127.8rem;
  height: 50rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${colors.gray0};
  border-radius: 2.6rem;
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    width: 33rem;
    height: 46.4rem;
  }
`;

export const GraphWrapper = styled.section`
  width: 37.8rem;
  height: 33.6rem;
  margin-right: 21.3rem;
  margin-left: 12.3rem;
  ${applyMediaQuery("mobile")} {
    margin: 0 auto;
    width: 21rem;
    height: 18.8rem;
  }
`;

export const StoryComment = styled.div`
  width: 60rem;
  ${applyMediaQuery("mobile")} {
    width: 27rem;
    margin-top: 3rem;
  }
  & > div {
    display: flex;
    align-items: center;
    & > p {
      color: ${colors.blue7};
      font-size: 1.6rem;
      font-family: "Pretendard-Medium";
      margin-left: 0.9rem;
      ${applyMediaQuery("mobile")} {
        font-size: 1rem;
      }
    }
  }
  & > p:nth-child(2) {
    color: ${colors.mildBlack};
    font-family: "Pretendard-Bold";
    font-size: 4.8rem;
    margin-top: 1.6rem;
    ${applyMediaQuery("mobile")} {
      margin-top: 1.2rem;
      font-size: 2.8rem;
    }
  }
  & > p:nth-child(3) {
    color: ${colors.gray6};
    font-family: "Pretendard-Bold";
    font-size: 3.2rem;
    margin-top: 1rem;
    line-height: 4.6rem;
    ${applyMediaQuery("mobile")} {
      margin-top: 0.8rem;
      font-size: 1.6rem;
      line-height: 2.3rem;
    }
  }
  & > button {
    width: 26.8rem;
    height: 5.4rem;
    border-radius: 4.8rem;
    background-color: ${colors.mainBlue};
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5.6rem;
    :hover {
      cursor: pointer;
    }
    ${applyMediaQuery("mobile")} {
      width: 16.3rem;
      height: 3.7rem;
      font-size: 1.4rem;
      font-family: "Pretendard-SemiBold";
      margin-top: 3.2rem;
      margin-bottom: 3.6rem;
    }
  }
`;
