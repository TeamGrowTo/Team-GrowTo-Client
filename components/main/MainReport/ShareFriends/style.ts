import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
export const StyledRoot = styled.section`
  display: flex;
  width: 100%;
  /* height: 80rem; */
  font-family: "Pretendard-Regular";
  ${applyMediaQuery("mobile")} {
    height: 34.6rem;
  }
`;

export const ShareBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 96rem;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    color: ${colors.subBlack};
    font-size: 3.6rem;
    font-family: "Pretendard-ExtraBold";
    margin: 3.2rem;
    display: flex;
    align-items: center;
  }
  & > p > span {
    color: ${colors.mainBlue};
    margin-right: 1.6rem;
  }
  ${applyMediaQuery("mobile")} {
    flex-direction: column;
    & > p {
      font-size: 1.8rem;
      font-family: "Pretendard-Bold";
      margin: 2rem;
    }
  }
`;

export const ShareButton = styled.button`
  width: 26rem;
  height: 8.8rem;
  background: ${colors.mainBlue};
  border-radius: 5rem;
  font-size: 2.4rem;
  font-family: "Pretendard-SemiBold";
  color: white;
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    width: 12rem;
    height: 4rem;
    font-size: 1.4rem;
  }
`;
