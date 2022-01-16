import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  width: 19.6rem;
  height: 19.6rem;
  border-radius: 2.8rem;
  background-color: #a5beff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  h3 {
    font-family: "Pretendard-Bold";
    font-size: 1.6rem;
    color: ${colors.gray5};
  }
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
  }
`;

export { StyledRoot };
