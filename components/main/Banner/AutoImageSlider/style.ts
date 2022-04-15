import styled from "styled-components";

interface SliderProps {
  page: number;
  moveWidth: number;
}

export const SliderBox = styled.header`
  width: 100vw;
  max-width: 100%;
  height: auto;
  position: relative;
  overflow-x: hidden;
`;

export const SliderWrapper = styled.article<SliderProps>`
  display: flex;
  /* transform: translateX(-${({ page, moveWidth }) => page * 100}rem); */
  transition: transform linear 0s 0.3s;
`;

export const LeftMoveButton = styled.button`
  position: absolute;
  bottom: 3rem;
  left: 40.3rem;
  background-color: white;
  width: 2.4rem;
  height: 2.4rem;
  opacity: 0.4;
  border-radius: 5rem;
`;

export const RightMoveButton = styled.button`
  position: absolute;
  bottom: 3rem;
  left: 41.5rem;
  background-color: white;
  width: 2.4rem;
  height: 2.4rem;
  opacity: 0.4;
  border-radius: 5rem;
`;
