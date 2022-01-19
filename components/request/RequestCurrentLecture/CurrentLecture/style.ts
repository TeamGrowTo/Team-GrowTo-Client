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
  background-image: url("/assets/images/requestLectureBackground.png");


  ${(props) =>
    props.order === 1
      ? css`
          transform: rotate(0deg);
        `
      : props.order === 2
      ? css`
          transform: rotate(-90deg);
        `
      : props.order === 3
      ? css`
          transform: rotate(-180deg);
        `
      : props.order === 4
      ? css`
          transform: rotate(90deg);
        `
      : props.order === 5
      ? css`
          transform: rotate(0deg);
        `
      : props.order === 6
      ? css`
          transform: rotate(-90deg);
        `
      : css`
          transform: rotate(-180deg);
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
