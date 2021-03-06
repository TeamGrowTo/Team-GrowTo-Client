import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 2.2rem;
  padding-bottom: 4rem;
  background-color: white;
  ${applyMediaQuery("mobile")} {
    padding: 3.6rem 1.6rem 2.4rem 1.6rem;
  }

  & > div:nth-of-type(2) {
    p:first-child {
      ${applyMediaQuery("mobile")} {
        width: 18rem;
        text-align: center;
        line-height: 2.5rem;
      }
    }
  }
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mainBlue};
  border-radius: 4.8rem;
  width: 63rem;
  height: 6.8rem;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 4.8rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${colors.blue5};
  }

  &:focus {
    background-color: ${colors.blue5};
  }

  & > svg {
    margin-right: 1.2rem;
    ${applyMediaQuery("mobile")} {
      margin-right: 0.6rem;
    }
  }

  & > span {
    font-size: 2rem;
    font-family: "Pretendard-Bold";
    color: white;
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;
