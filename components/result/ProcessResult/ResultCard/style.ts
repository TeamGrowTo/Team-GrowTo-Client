import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.article`
  position: relative;
  width: 41.3rem;
  height: 54rem;
  display: flex;
  flex-direction: column;
  padding: 7.3rem 5rem 0 5rem;
  margin-top: 3.1rem;
  border-radius: 28px 28px 0px 0px;
  border: 0.2rem solid white;
  backdrop-filter: blur(42rem);
  background: rgba(255, 255, 255, 0.7);
`;

const LectureTitle = styled.h3`
  width: 25rem;
  color: ${colors.subBlack};
  font-size: 2.4rem;
  line-height: 3.4rem;
  font-family: "Pretendard-Bold";
  margin-bottom: 2rem;
`;

const MoreButton = styled.a`
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
  & > svg {
    margin-left: 1rem;
  }
`;

export { LectureTitle, MoreButton, StyledRoot };
