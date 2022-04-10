import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.article`
  position: relative;
  width: 41.3rem;
  height: 54rem;
  display: flex;
  flex-direction: column;
  border-radius: 2.8rem 2.8rem 0 0;
  border: 0.2rem solid white;
  backdrop-filter: blur(2rem);
  background: rgba(255, 255, 255, 0.7);

  ${applyMediaQuery("mobile")} {
    width: 29.6rem;
    height: 39.8rem;
  }
`;

export const Description = styled.section`
  height: 43.6rem;
  padding: 4rem 5rem 0 5rem;
  overflow: hidden;
  ${applyMediaQuery("mobile")} {
    padding: 4.2rem 2.4rem 0 2.4rem;
  }
`;

export const LectureSite = styled.div`
  font-size: 1.8rem;
  font-family: "Pretendard-Medium";
  color: ${colors.gray6};
  line-height: 2.2rem;
  margin-bottom: 0.4rem;
`;

export const LectureTitle = styled.h3`
  width: 31.4rem;
  max-height: 6.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${colors.gray7};
  font-size: 2.4rem;
  line-height: 3.4rem;
  font-family: "Pretendard-Bold";
  margin-bottom: 1.6rem;

  ${applyMediaQuery("mobile")} {
    width: 21.2rem;
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 0.8rem;
  }
`;

export const Line = styled.div`
  height: 0.1rem;
  background-color: ${colors.gray1};
  margin: 2.4rem 1.6rem 0;
  z-index: 30;
`;
