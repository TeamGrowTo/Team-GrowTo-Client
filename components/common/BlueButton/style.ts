import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.button<{
  width: string;
  height: string;
  fontSize: string;
  margin: string;
}>`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background: ${colors.mainBlue};
  border-radius: 4.5rem;

  font-family: "Pretendard-Bold";
  color: white;
  font-size: ${(props) => props.fontSize};
  line-height: 2.4rem;
  text-align: center;

  cursor: pointer;
`;

export { StyledRoot };
