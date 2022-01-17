import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
`;

const BackGround = styled.div<{ flagModal: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${colors.subBlack};
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  ${({ flagModal }) =>
    !flagModal &&
    css`
      overflow: unset;
    `};
`;

export { BackGround, StyledRoot };
