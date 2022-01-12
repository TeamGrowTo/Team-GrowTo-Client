import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  width: 100%;
  height: 32.8rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(108.46deg, #7000ff 31.64%, #8e0ef3 83.2%);
  flex-wrap: wrap;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: end;
`;

const TitleWrapper = styled.span`
  width: 44.8rem;
  margin-right: 19.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h1 {
    color: ${colors.white};
    font-size: 5.4rem;
    font-family: "Pretendard-ExtraBold";
    margin-bottom: 2.8rem;
    line-height: 6.8rem;
  }
  & > h2 {
    color: ${colors.white};
    font-size: 2.2rem;
    line-height: 2.2rem;
    letter-spacing: -0.01em;
  }
`;

export { IconWrapper, StyledRoot, TitleWrapper };
