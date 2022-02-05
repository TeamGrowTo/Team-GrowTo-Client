import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.paleViolet};
  overflow: hidden;
`;

const ComparisonImgWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 5.5rem;
  ${applyMediaQuery("mobile")} {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 1.2rem;
  margin-top: 4.8rem;
  ${applyMediaQuery("mobile")} {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
`;

const Description = styled.p`
  width: 48rem;
  height: 7.6rem;
  color: ${colors.gray0};
  line-height: 3.8rem;
  font-size: 2.8rem;
  text-align: center;
  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
    width: 20rem;
    height: auto;
    line-height: 1.8rem;
  }
`;

const LectureCount = styled.span`
  font-family: "Pretendard-Bold";
  color: ${colors.gray0};
`;

const LectureSkillData = styled.span`
  font-family: "Pretendard-Bold";
  color: ${colors.gray0};
`;

const ResultData = styled.span`
  font-family: "Pretendard-Bold";
  color: ${colors.gray0};
`;

const ResultCardWrapper = styled.section<{ resultDataCount: number }>`
  display: flex;
  justify-content: center;
  margin-top: 3.1rem;
  & > * {
    ${({ resultDataCount }) =>
      resultDataCount === 3
        ? css`
            margin-right: 1.9rem;
          `
        : css`
            margin-right: 2rem;
          `}
  }
  & > *:last-child {
    margin-right: 0;
  }
  ${applyMediaQuery("mobile")} {
    /* margin: 0; */
    margin-top: 1.6rem;
  }
`;

export {
  ComparisonImgWrapper,
  Description,
  LectureCount,
  LectureSkillData,
  ResultCardWrapper,
  ResultData,
  StyledRoot,
  Title,
};
