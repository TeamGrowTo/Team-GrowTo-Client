import styled from "styled-components";
import { colors } from "styles/color";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 58rem;
  background-color: ${colors.mainBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 98rem;
  height: 40rem;
  background-color: ${colors.gray1};
  backdrop-filter: blur(10px);
  /*블러처리 어떻게 해*/
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledRoot, Wrapper };
