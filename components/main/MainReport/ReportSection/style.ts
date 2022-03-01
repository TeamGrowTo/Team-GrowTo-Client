import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 7.5rem 2.875rem;
  ${applyMediaQuery("mobile")} {
    margin: 1.6rem 1.4rem 2.5rem;
  }
`;

export const TitleWrapper = styled.figcaption`
  width: 19.5rem;
  height: 6.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
    rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(0.5rem);
  border-radius: 5rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${applyMediaQuery("mobile")} {
    width: 8.2rem;
    height: 2.4rem;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
  }
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-family: "Pretendard-SemiBold";
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    font-family: "Pretendard-Light";
  }
`;

export const Data = styled.figcaption`
  color: ${colors.subBlack};
  display: flex;
  align-items: center;
`;

export const Count = styled.span`
  font-size: 5.5rem;
  font-family: "Pretendard-Bold";
  letter-spacing: -0.125rem;
  margin-right: 0.75rem;
  ${applyMediaQuery("mobile")} {
    font-size: 2rem;
    margin-right: 0.2rem;
  }
`;

export const Unit = styled.span`
  font-size: 3.75rem;
  font-family: "Pretendard-SemiBold";
  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
  }
`;
