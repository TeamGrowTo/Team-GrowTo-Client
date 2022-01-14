import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 9.6rem;
    font-size: 2rem;
  }
`;

const InfoName = styled.ul`
  margin-right: 2.95rem;
  color: ${colors.subBlack};
  font-family: "Pretendard-Regular";
`;

const InfoData = styled.ul`
  color: ${colors.subBlack};
  font-family: "Pretendard-Bold";
`;

export { StyledRoot, InfoName, InfoData };
