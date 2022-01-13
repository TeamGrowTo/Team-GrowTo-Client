import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${colors.gray3};
`;
export const Title = styled.div`
  display: flex;
  margin-top: 8.2rem;
  align-items: center;
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  & > h2 {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    position: absolute;
    left: calc(50% - 12.5rem);
  }
`;
export const Container = styled.div`
  width: 102rem;
  position: relative;
  margin: 0 auto;
  display: flex;
`;

export const ChoiceCard = styled.section`
  width: 102rem;
  height: 66rem;
`;
