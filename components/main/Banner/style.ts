import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(108.46deg, #7000ff 31.64%, #8e0ef3 83.2%);
  /* flex-wrap: wrap; */
  ${applyMediaQuery("mobile")} {
    width: 50rem;
    flex-direction: column;
    padding-top: 3.2rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: end;
`;

const TitleWrapper = styled.div`
  width: 44.8rem;
  margin-right: 19.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h1 {
    color: white;
    font-size: 5.4rem;
    font-family: "Pretendard-ExtraBold";
    margin-bottom: 2.8rem;
    line-height: 6.8rem;
  }
  & > p {
    color: white;
    font-size: 2.2rem;
    line-height: 2.2rem;
    letter-spacing: -0.01em;
  }
  ${applyMediaQuery("mobile")} {
    width: 23.2rem;
    margin: 0 auto;
    & > h1 {
      font-family: "Pretendard-Bold";
      font-size: 2.8rem;
      line-height: 3.4rem;
      text-align: center;
    }
    & > p {
      font-family: "Pretendard-Medium";
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export { ImageWrapper, StyledRoot, TitleWrapper };
