import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.section`
  width: 100vw;
  height: 100vh;
`;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.subBlack};
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
`;

export { BackGround, StyledRoot };
