import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div<{ order: number }>`
  width: 19.6rem;
  height: 19.6rem;
  border-radius: 2.8rem;
  background-color: ${colors.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  ${(props) =>
    props.order === 1
      ? css`
          background-image: url("/assets/images/requestLectureBackground1.png");
        `
      : props.order === 2
      ? css`
          background-image: url("/assets/images/requestLectureBackground2.png");
        `
      : props.order === 3
      ? css`
          background-image: url("/assets/images/requestLectureBackground3.png");
        `
      : props.order === 4
      ? css`
          background-image: url("/assets/images/requestLectureBackground4.png");
        `
      : props.order === 5
      ? css`
          background-image: url("/assets/images/requestLectureBackground1.png");
        `
      : props.order === 6
      ? css`
          background-image: url("/assets/images/requestLectureBackground2.png");
        `
      : css`
          background-image: url("/assets/images/requestLectureBackground3.png");
        `}};


  h3 {
    font-family: "Pretendard-Bold";
    font-size: 1.6rem;
    color: ${colors.gray5};
  
  }
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    
  }
`;

export { StyledRoot };
