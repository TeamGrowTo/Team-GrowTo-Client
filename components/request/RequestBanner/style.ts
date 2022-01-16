import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 19.2rem;
`;

const Wrapper = styled.div`
  width: 69.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    color: white;
  }
  div > p {
    color: ${colors.mainBlue};
  }
`;

export { StyledRoot, Wrapper };
