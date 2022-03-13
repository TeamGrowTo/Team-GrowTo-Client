import styled from "styled-components";
import { colors } from "styles/colors";

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
  background: ${colors.subBlack};
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;
