import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.aside`
  color: ${colors.subBlack};
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
  line-height: 2rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
    line-height: 1.8rem;
  }
`;

export const SubInfoUnit = styled.span`
  font-family: "Pretendard-Regular";
  & > span {
    font-family: "Pretendard-bold";
  }
`;
