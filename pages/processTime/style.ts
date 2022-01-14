import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.mainBlue}, ${colors.subPink});
`;

export const ProcessBox = styled.div`
  position: relative;
  width: 102rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CardChoice = styled.section`
  width: 102rem;
  height: 49.3rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 2.8rem 2.8rem;
  border: 2px solid white;
  margin-bottom: 14.2rem;
`;

export const TimeWrapper = styled.div`
  width: 77.4rem;
  margin: 6.5rem auto 0;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 2.4rem;
    color: ${colors.subBlack};
    margin-bottom: 2rem;
  }
  & > p > span {
    color: ${colors.subOrange};
  }
`;

export const TypeButton = styled.button`
  width: 22rem;
  height: 18rem;
  border-radius: 2.8rem;
  font-family: "Pretendard-Bold";
  font-size: 2.4rem;
  color: ${colors.subBlack};
  background-color: rgba(255, 255, 255, 0.7);
  margin: 6.8rem 1.8rem 0;
`;
