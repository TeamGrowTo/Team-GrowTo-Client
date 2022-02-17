import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6rem 2.3rem;
  ${applyMediaQuery("mobile")} {
    margin: 1.6rem 1.4rem 2.5rem;
  }
`;

const TitleWrapper = styled.figcaption`
  width: 17rem;
  height: 5.2rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
    rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 4rem;
  margin-top: 1.8rem;
  margin-bottom: 2.4rem;
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

const Title = styled.p`
  font-size: 2rem;
  font-family: "Pretendard-SemiBold";
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    font-family: "Pretendard-Light";
  }
`;

const Data = styled.figcaption`
  color: ${colors.subBlack};
  display: flex;
  align-items: center;
`;

const Count = styled.span`
  font-size: 4.4rem;
  font-family: "Pretendard-Bold";
  letter-spacing: -0.1rem;
  margin-right: 0.6rem;
  ${applyMediaQuery("mobile")} {
    font-size: 2rem;
    margin-right: 0.2rem;
  }
`;

const Unit = styled.span`
  font-size: 3rem;
  font-family: "Pretendard-SemiBold";
  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
  }
`;

export { Count, Data, StyledRoot, Title, TitleWrapper, Unit };
