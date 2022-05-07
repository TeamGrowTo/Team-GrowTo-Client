import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  width: 100%;
  margin-bottom: 14.8rem;
`;

export const MainToCategory = styled.section`
  width: 102.8rem;
  height: 44rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const CircleWrapper = styled.div`
  margin-right: 4.25rem;
  & < img {
    width: 44rem;
    height: 44rem;
  }
`;

export const ArrowToCircleWrapper = styled.div`
  margin-right: 4.5rem;
  width: 10.8rem;
  height: 8rem;
`;

export const CategoryComment = styled.div`
  width: 60rem;
  & > div {
    display: flex;
    align-items: center;
    & > p {
      color: ${colors.blue7};
      font-size: 1.6rem;
      font-family: "Pretendard-Medium";
      margin-left: 0.9rem;
    }
  }
  & > p:nth-child(2) {
    color: ${colors.mildBlack};
    font-family: "Pretendard-Bold";
    font-size: 4.8rem;
    margin-top: 1.6rem;
  }
  & > p:nth-child(3) {
    color: ${colors.gray6};
    font-family: "Pretendard-Bold";
    font-size: 3.2rem;
    margin-top: 1rem;
    line-height: 4.6rem;
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
  }
`;

export const MainToProcess = styled.section`
  width: 102.8rem;
  height: 44rem;
  margin: 12.5rem auto 0;
  display: flex;
`;

export const ResultCardComment = styled.div`
  width: 50rem;
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
    }
  }
  & > p:nth-child(2) {
    text-align: right;
    color: ${colors.mildBlack};
    font-family: "Pretendard-Bold";
    font-size: 4.8rem;
    margin-top: 1.6rem;
  }
  & > p:nth-child(3) {
    text-align: right;
    margin-left: auto;
    color: ${colors.gray6};
    font-family: "Pretendard-Bold";
    font-size: 3.2rem;
    margin-top: 1rem;
    line-height: 4.6rem;
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
  }
`;

export const ResultCardWrapper = styled.div`
  width: 66rem;
  height: 44rem;
  margin-left: 11rem;
`;

export const MainToStory = styled.section`
  width: 127.8rem;
  height: 50rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${colors.gray0};
  border-radius: 2.6rem;
`;

export const GraphWrapper = styled.div`
  width: 37.8rem;
  height: 33.6rem;
  margin-right: 21.3rem;
  margin-left: 12.3rem;
`;

export const StoryComment = styled.div`
  width: 60rem;
  & > div {
    display: flex;
    align-items: center;
    & > p {
      color: ${colors.blue7};
      font-size: 1.6rem;
      font-family: "Pretendard-Medium";
      margin-left: 0.9rem;
    }
  }
  & > p:nth-child(2) {
    color: ${colors.mildBlack};
    font-family: "Pretendard-Bold";
    font-size: 4.8rem;
    margin-top: 1.6rem;
  }
  & > p:nth-child(3) {
    color: ${colors.gray6};
    font-family: "Pretendard-Bold";
    font-size: 3.2rem;
    margin-top: 1rem;
    line-height: 4.6rem;
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
  }
`;
