import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const ResultBox = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  padding-bottom: 9.2rem;
  ${applyMediaQuery("mobile")} {
    padding-bottom: 4.9rem;
  }
`;

export const ResultTop = styled.div`
  padding-top: 9rem;
  display: flex;
  justify-content: space-between;
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    align-items: center;
  }
`;

export const LectureCountBox = styled.span`
  ${applyMediaQuery("mobile")} {
    display: block;
  }
`;

export const NoLecture = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #b6b6b6;
`;

export const LectureCount = styled.span<{ color: "mainBlue" | "subBlack" }>`
  font-family: "Pretendard-Bold";
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: ${(props) => colors[props.color] || colors.subBlack};
`;
