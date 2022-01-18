import { ProcessLoading } from "public/assets/icons";
import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
`;
export const PlayIcon = styled.div`
  position: absolute;
  top: 6.45rem;
  right: 0;
`;
export const SquareIcon = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 11.1rem;
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
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0 0 2.8rem 2.8rem;
  border: 2px solid white;
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

export const NextButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const NextButton = styled.button<{ selectedPrice: string }>`
  margin-left: auto;
  margin-top: 2.4rem;
  margin-bottom: 5.8rem;
  width: 22.4rem;
  height: 6rem;
  background: ${({ selectedPrice }) =>
    selectedPrice.length > 0 ? `${colors.mainBlue}` : `${colors.gray2}`};
  font-size: 2.4rem;
  font-family: "Pretendard-Bold";
  border-radius: 4.8rem;
  color: ${({ selectedPrice }) => (selectedPrice.length > 0 ? "white" : `${colors.gray4}`)};
  :hover {
    cursor: pointer;
  }
`;

export const NextArrowWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 4.5rem;
`;

export const LoadingStyledRoot = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, ${colors.mainBlue}, ${colors.subPink});
`;
export const LogoWrapper = styled.div`
  width: 42.5rem;
  height: 96.4rem;
  margin: 0 auto;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    color: white;
    line-height: 5.4rem;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
`;
export const LoadingLogo = styled(ProcessLoading)`
  margin: 27.5rem auto 4.4rem;
  animation: logoRotate 3s;
  @keyframes logoRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
