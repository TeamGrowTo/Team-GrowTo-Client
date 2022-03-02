import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.figure<{ isTransparent: boolean; isTransparentMobile: boolean }>`
  box-sizing: border-box;
  width: 39.5rem;
  height: 28.375rem;
  border-radius: 3rem;
  padding: 2.875rem 3.5rem 3.1875rem;
  margin-bottom: 3.875rem;
  margin-right: 2.66rem;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5rem);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: ${(props) =>
    props.isTransparent == true ? "rgb(225,225,225, 0.32)" : `${colors.gray1}`};
  background: linear-gradient(
    ${(props) =>
      props.isTransparent == true
        ? "156.09deg, rgba(255, 255, 255, 0.8) 11.39%, rgba(255, 255, 255, 0.2) 107.05%"
        : ""}
  );
  border-top: ${(props) => (props.isTransparent == true ? "3px solid #FFFFFF" : "")};

  ${applyMediaQuery("mobile")} {
    width: 16rem;
    height: 14.8rem;
    border-radius: 1.6rem;
    padding: 1.2rem;
    margin-bottom: 0.8rem;
    margin-right: 0.8rem;
    background-color: ${(props) =>
      props.isTransparentMobile == true ? "rgb(225,225,225, 0.32)" : `${colors.gray1}`};
    background: linear-gradient(
      ${(props) =>
        props.isTransparentMobile == true
          ? "156.09deg, rgba(255, 255, 255, 0.8) 11.39%, rgba(255, 255, 255, 0.2) 107.05%"
          : ""}
    );
    border-top: ${(props) => (props.isTransparentMobile == true ? "3px solid #FFFFFF" : "")};
  }
`;

export const Comment = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 2rem;
  width: 32.5rem;
  line-height: 3rem;
  color: ${colors.subBlack};
  ${applyMediaQuery("mobile")} {
    width: 13.6rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const Bottom = styled.figcaption`
  width: 100%;
  height: 6.375rem;
  display: flex;
  align-items: center;
  position: absolute;
  left: 3.875rem;
  bottom: 3.1875rem;
  ${applyMediaQuery("mobile")} {
    height: 4rem;
    left: 1.4rem;
    bottom: 1.2rem;
  }
`;

export const Introduce = styled.address`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: ${colors.gray6};
  margin-left: 2rem;
  line-height: 2.25rem;
  width: 19rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    line-height: 1.4rem;

    div {
      width: 9rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
