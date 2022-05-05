import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.button<{ isSelected: boolean; isClicked: boolean }>`
  width: 13.2rem;
  height: 12.7rem;
  border-radius: 2.8rem;
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  color: ${colors.subBlack};
  background-color: rgba(255, 255, 255, 0.7);
  opacity: ${({ isClicked }) => (isClicked ? ({ isSelected }) => (isSelected ? 1 : 0.5) : 1)};
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 0.3rem
    ${({ isSelected }) => (isSelected ? `${colors.mainBlue}` : "rgba(255, 255, 255, 0.7)")};
  ${applyMediaQuery("mobile")} {
    width: 9.2rem;
    height: 5.6rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  & > div {
    width: 3.6rem;
    height: 3.6rem;

    ${applyMediaQuery("mobile")} {
      width: 4rem;
      height: 4rem;
    }
  }

  & > span {
    color: ${colors.subBlack};
    margin-top: 1.6rem;
    font-family: "Pretendard-SemiBold";
    font-size: 2rem;

    ${applyMediaQuery("mobile")} {
      font-family: "Pretendard-Medium";
      font-size: 1rem;
    }
  }
  :hover {
    cursor: pointer;
  }
`;
