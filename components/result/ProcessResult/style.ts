import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(275.27deg, #caacff 8.92%, #4579ff 99.98%);
  overflow: hidden;
`;

const SmallCompass = styled.div`
  position: absolute;
  left: 9.35rem;
  bottom: 9.9rem;
`;

const LargeCompass = styled.div`
  position: absolute;
  right: 14.3rem;
  top: -1.5rem;
`;

const Title = styled.div`
  font-size: 4rem;
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 1.2rem;
  margin-top: 4.8rem;
`;

const Description = styled.p`
  width: 48rem;
  height: 7.6rem;
  color: ${colors.gray0};
  line-height: 3.8rem;
  font-size: 2.8rem;
  text-align: center;
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
`;

export {
  Description,
  LargeCompass,
  LectureCount,
  LectureSkillData,
  ResultCardWrapper,
  ResultData,
  SmallCompass,
  StyledRoot,
  Title,
};