import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  width: 100%;
  /* max-width: 100%; */
  height: auto;
  display: flex;
  justify-content: center;
  background: linear-gradient(108.46deg, #7000ff 31.64%, #8e0ef3 83.2%);
  flex-wrap: wrap;
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    padding-top: 3.2rem;
    align-items: center;
  }
`;

const ImageWrapper = styled.article`
  display: flex;
  align-items: end;
  margin-top: 5.2rem;
`;

const TitleWrapper = styled.article`
  width: 53rem;
  margin-right: 7.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${applyMediaQuery("mobile")} {
    width: 26rem;
    margin: 0 auto;
  }

  & > h1 {
    color: white;
    font-size: 6rem;
    font-family: "Pretendard-ExtraBold";
    margin-bottom: 2rem;
    line-height: 6.8rem;
    ${applyMediaQuery("mobile")} {
      font-family: "Pretendard-Bold";
      font-size: 2.8rem;
      text-align: center;
      line-height: 3.4rem;
      margin-bottom: 1.2rem;
    }
  }

  & > p {
    color: ${colors.gray3};
    font-size: 2.2rem;
    line-height: 2.6rem;
    letter-spacing: -0.01em;
    font-family: "Pretendard-SemiBold";
    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export { ImageWrapper, StyledRoot, TitleWrapper };
