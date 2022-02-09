import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export const Tag = styled.article`
  padding: 0.9rem 2rem;
  background-color: ${colors.gray0};
  color: ${colors.gray6};
  font-size: 1.8rem;
  font-family: "Pretendard-Bold";
  border-radius: 3.5rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
    padding: 0.5rem 1.8rem;
  }
`;
