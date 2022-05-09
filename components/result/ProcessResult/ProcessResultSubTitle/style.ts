import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const Description = styled.p`
  width: 49rem;
  color: ${colors.gray2};
  line-height: 3.8rem;
  font-size: 2.8rem;
  font-family: "Pretendard-Bold";
  text-align: center;

  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
    width: 22rem;
    height: auto;
    line-height: 1.8rem;
  }
`;

export const LectureCount = styled.span`
  color: ${colors.gray0};
`;

export const LectureSkillData = styled.span`
  color: ${colors.gray0};
`;

export const ResultData = styled.span`
  color: ${colors.gray0};
`;
