import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div<{ isTransparent: boolean; isTransparentMobile: boolean }>`
  box-sizing: border-box;
  width: 31.6rem;
  height: 22.8rem;
  border-radius: 2.4rem;
  padding: 2.4rem 2.8rem;
  margin-bottom: 3.1rem;
  margin-right: 3.2rem;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(40rem);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
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

export const Comment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  width: 26rem;
  line-height: 2.4rem;
  /* color: ${colors.subBlack}; */
  ${applyMediaQuery("mobile")} {
    width: 13.6rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const Bottom = styled.div`
  height: 5.6rem;
  display: flex;
  align-items: center;
  position: absolute;
  left: 2.7rem;
  bottom: 2.5rem;
  ${applyMediaQuery("mobile")} {
    height: 4rem;
    left: 1.4rem;
    bottom: 1.2rem;
  }
`;

export const ImgWrapper = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  ${applyMediaQuery("mobile")} {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const Introduce = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  color: ${colors.gray6};
  margin-left: 1.2rem;
  line-height: 1.8rem;
  width: 8.9rem;

  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ${applyMediaQuery("mobile")} {
    line-height: 1.4rem;
  }
`;
