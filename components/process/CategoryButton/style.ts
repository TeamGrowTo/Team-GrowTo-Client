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
    //font-family: "Pretendard-Regular";
    display: flex;
    flex-direction: row;
    width: 10.4rem;
    height: 4.8rem;
    display: flex;
    font-size: 1.4rem;
    border-radius: 4.8rem;
    margin-right: 0.8rem;
    border: solid 0.2rem
      ${({ isSelected }) => (isSelected ? `${colors.mainBlue}` : "rgba(255, 255, 255, 0.7)")};
  }

  /* & > div {
    width: 3.6rem;
    height: 3.6rem;

    ${applyMediaQuery("mobile")} {
      width: 4rem;
      height: 4rem;
    }
  }
*/
  & > span {
    color: ${colors.subBlack};
    margin-top: 1.6rem;
    font-family: "Pretendard-SemiBold";
    font-size: 2rem;

    ${applyMediaQuery("mobile")} {
      margin-top: 0rem;
      margin-left: 1rem;
      font-family: "Pretendard-Regular";
      font-size: 1.4rem;
    }
  }
  :hover {
    cursor: pointer;
  }
`;
