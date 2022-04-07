import styled from "styled-components";

interface SliderProps {
  page: number;
  moveWidth: number;
}

export const SliderBox = styled.header`
  width: 100vw;
  height: auto;
  position: relative;

  & > button {
    position: absolute;
  }
`;

export const SliderWrapper = styled.article<SliderProps>`
  transform: translateX(${({ page, moveWidth }) => page * moveWidth}rem);
  transition: transform linear 0.2s 0.3s;
`;
