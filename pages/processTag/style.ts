import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background: ${colors.gray3};
`;

export const Container = styled.div`
  position: relative;
  width: 102rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.section`
  width: 102rem;
  height: 16.7rem;
  margin-top: 4rem;
  background: white;
  opacity: 0.7;
  border-radius: 2.8rem 2.8rem 0 0;
`;

export const CardChoice = styled.section`
  width: 102rem;
  height: 49.3rem;
  background: white;
  opacity: 0.2;
  border-radius: 0 0 2.8rem 2.8rem;
`;
export const NextButtonWrapper = styled.div`
  display: flex;
`;
export const NextButton = styled.button`
  margin-left: auto;
  margin-top: 2.4rem;
  width: 22.4rem;
  height: 6rem;
  background: ${colors.gray2};
  font-size: 2.4rem;
  font-family: "Pretendard-Bold";
  border-radius: 4.8rem;
`;
