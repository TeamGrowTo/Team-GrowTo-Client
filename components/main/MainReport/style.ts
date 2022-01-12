import styled from "styled-components";
import { colors } from "styles/color";

const StyledRoot = styled.div`
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
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledRoot, Wrapper };
