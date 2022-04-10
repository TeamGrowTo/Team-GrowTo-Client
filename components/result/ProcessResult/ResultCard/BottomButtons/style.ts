import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.article`
  width: 100%;
  height: 7.8rem;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 2.8rem;
`;

export const ImageWrapper = styled.div`
  display: none;
`;

export const MoreButton = styled.a`
  width: 13.5rem;
  height: 5.2rem;
  border-radius: 4.8rem;
  color: white;
  text-align: center;
  line-height: 5.2rem;
  font-size: 1.8rem;
  font-family: "Pretendard-Medium";
  background-color: ${colors.mainBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  ${applyMediaQuery("mobile")} {
    right: 2rem;
    bottom: 2rem;
    width: 11.6rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.6rem;
  }

  & > svg {
    margin-left: 0.8rem;
  }
`;
