import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const LinkWrapper = styled.aside`
  display: flex;
  ${applyMediaQuery("desktop")} {
    align-items: end;
    margin-bottom: 2.3rem;
  }
  ${applyMediaQuery("mobile")} {
    display: none;
  }
`;

export const RedirectRequestPage = styled.a`
  display: flex;
  align-items: center;
  border: 0;
  font-size: 1.4rem;
  font-family: "Pretendard-Regular";
  color: ${colors.gray6};

  /* margin-bottom: 4.3rem; */
  cursor: pointer;
  & > svg {
    margin-left: 1rem;
  }
`;
