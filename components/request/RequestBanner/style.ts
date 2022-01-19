import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 19.2rem;
  background-color: ${colors.subOrange};
  background-image: url("/assets/images/requestBannerBackground.png");
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 69.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    line-height: 5rem;
    color: white;
    display: flex;
    /* margin-bottom: 0.5rem; */
  }
  div > p {
    color: ${colors.mainBlue};
  }
`;

export { StyledRoot, Wrapper };
