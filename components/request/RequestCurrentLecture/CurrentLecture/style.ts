import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div<{ order: number }>`
  box-sizing: border-box;
  width: 19.6rem;
  height: 19.6rem;
  border-radius: 2.8rem;
  background-color: ${colors.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  ${applyMediaQuery("mobile")} {
    width: 15.8rem;
    height: 8.8rem;
    margin-bottom: 1.2rem;
    margin-right: 1.2rem;
  }

  ${(props) =>
    props.order === 1
      ? css`
          background-image: url("/assets/images/requestCurrentLectureBackground1.png");
        `
      : props.order === 2
      ? css`
          background-image: url("/assets/images/requestCurrentLectureBackground2.png");
        `
      : props.order === 3
      ? css`
          background-image: url("/assets/images/requestCurrentLectureBackground3.png");
        `
      : props.order === 4
      ? css`
          background-image: url("/assets/images/requestCurrentLectureBackground4.png");
        `
      : props.order === 5
      ? css`
          background-image: url("/assets/images/requestCurrentLectureBackground1.png");
        `
      : props.order === 6
      ? css`
          background-image: url("/assets/images/requestCurrentLectureBackground2.png");
        `
      : css`
          background-image: url("/assets/images/requestCurrentLectureBackground3.png");
        `};

  h3 {
    font-family: "Pretendard-Bold";
    font-size: 1.6rem;
    color: ${colors.gray5};
    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: ${colors.subBlack};
    ${applyMediaQuery("mobile")} {
      font-size: 1.7rem;
    }
  }
`;

export { StyledRoot };
