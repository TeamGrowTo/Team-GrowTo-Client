import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.article`
  width: 41.4rem;
  height: 54rem;
  display: flex;
  flex-direction: column;
  padding: 7.3rem 5rem 0 5rem;
  border-radius: 2.8rem 2.8rem 0 0;
  border: 0.2rem solid white;
  backdrop-filter: blur(2rem);
  background: rgba(255, 255, 255, 0.7);
  ${applyMediaQuery("mobile")} {
    width: 29.6rem;
    height: 39.8rem;
    padding: 4.2rem 2.4rem 0 2.4rem;
  }
`;

export const LectureTitle = styled.h3`
  width: 25.6rem;
  color: ${colors.subBlack};
  font-size: 2.4rem;
  line-height: 3.4rem;
  font-family: "Pretendard-Bold";
  margin-bottom: 2rem;
  ${applyMediaQuery("mobile")} {
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 0.8rem;
  }
`;

export const MoreButton = styled.a`
  position: absolute;
  right: 2.4rem;
  bottom: 4rem;
  width: 14.5rem;
  height: 5.2rem;
  border-radius: 4.8rem;
  color: white;
  text-align: center;
  line-height: 5.2rem;
  font-size: 1.8rem;
  font-family: "Pretendard-Bold";
  background-color: ${colors.mainBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    right: 2rem;
    bottom: 2rem;
    width: 11.6rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.6rem;
  }

  & > svg {
    margin-left: 1rem;
    ${applyMediaQuery("mobile")} {
      margin-left: 0.8rem;
    }
  }
`;
