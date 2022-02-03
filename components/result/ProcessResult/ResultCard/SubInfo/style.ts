import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  color: ${colors.subBlack};
  font-size: 1.6rem;
  font-family: "Pretendard-Regular";
  margin-bottom: 2.4rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
  }
`;

const SubInfoUnit = styled.span`
  & > span {
    font-family: "Pretendard-bold";
  }
`;

export { StyledRoot, SubInfoUnit };
