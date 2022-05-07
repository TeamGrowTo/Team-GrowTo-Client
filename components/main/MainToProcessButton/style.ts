import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 11.2rem;
`;

export const ButtonWrapper = styled.article`
  width: 93.2rem;
  max-width: 100%;
  height: 9.6rem;
  background: linear-gradient(90deg, #45a6ff 2.09%, #45deff 100%);
  color: white;
  padding-left: 5.2rem;
  padding-right: 4.2rem;
  margin: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2.4rem;

  ${applyMediaQuery("mobile")} {
    height: 8rem;
    padding: 0 1.6rem;
    border-radius: 1.2rem;
  }
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  font-family: "Pretendard-ExtraBold";
  margin-bottom: 0.3rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

export const ToProcessButton = styled.a`
  width: 18.6rem;
  height: 5.6rem;
  background-color: ${colors.blue6};
  border-radius: 4.4rem;
  color: white;
  font-size: 2rem;
  font-family: "Pretendard-Bold";
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  padding-left: 2.9rem;
  padding-right: 2.1rem;

  ${applyMediaQuery("mobile")} {
    width: 10.6rem;
    height: 3.2rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    padding-left: 1.5rem;
    padding-right: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.span`
  margin-left: 1.3rem;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;

  ${applyMediaQuery("mobile")} {
    width: 0.65rem;
    height: 0.65rem;
    margin-left: 0.73rem;
  }
`;
