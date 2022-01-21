import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  color: ${colors.subBlack};
  font-size: 1.6rem;
  font-family: "Pretendard-Regular";
  margin-bottom: 2.4rem;
`;

const SubInfoUnit = styled.span`
  & > span {
    font-family: "Pretendard-bold";
  }
`;

export { StyledRoot, SubInfoUnit };
