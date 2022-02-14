import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.button`
  position: fixed;
  bottom: 4.4rem;
  right: 8.2rem;
  background-color: ${colors.mainBlue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.9rem;
  height: 4.8rem;
  box-shadow: 0 0.6rem 1.8rem rgba(0, 0, 0, 0.22);
  border-radius: 2.8rem;
  ${applyMediaQuery("mobile")} {
    width: 4rem;
    height: 4rem;
    bottom: 1.6rem;
    right: 2.6rem;
  }

  &:hover {
    cursor: pointer;
  }

  & > span {
    margin-right: 1.7rem;
    line-height: 1.9rem;
    font-size: 1.6rem;
    font-family: "Pretendard-Bold";
  }

  & > svg {
    width: 1.5rem;
    height: 3.4rem;
    ${applyMediaQuery("mobile")} {
      width: 1.1rem;
      height: 2.4rem;
    }
  }
`;
