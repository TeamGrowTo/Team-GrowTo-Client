import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const ResultBox = styled.div`
  width: 128rem;
  margin: 0 auto;
  padding-bottom: 9.2rem;

  @media (max-width: 1024px) {
    //카드 3개 넓이
    width: 96rem;
  }

  @media (max-width: 720px) {
    width: calc(100% - 2rem);
  }

  ${applyMediaQuery("mobile")} {
    padding-bottom: 4.9rem;
  }
`;

export const ResultTop = styled.div`
  padding-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  ${applyMediaQuery("mobile")} {
    align-items: center;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const LectureCountBox = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 2.4rem;
  color: ${colors.bgGray};
  @media (max-width: 720px) {
    margin-bottom: 2.6rem;
  }
  ${applyMediaQuery("mobile")} {
    display: block;
  }
`;

export const LectureCount = styled.span<{ color: "mainBlue" | "mildBlack" }>`
  font-family: "Pretendard-Bold";
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: ${(props) => colors[props.color] || colors.mildBlack};
  ${applyMediaQuery("mobile")} {
    font-size: 1.8rem;
  }
`;
