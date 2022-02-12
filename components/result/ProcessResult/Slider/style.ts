import styled from "styled-components";

export const StyledRoot = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1.6rem;
`;

export const SliderBox = styled.article`
  width: 29.6rem;
  overflow-x: hidden;
`;

export const SliderWrapper = styled.section<{ page: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform linear 0.2s 0.3s;
  transform: translateX(-${({ page }) => page * 31.6}rem);
  & > * {
    margin-right: 2rem;
  }
`;

export const SliderIconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  padding: 0 1rem;
  height: 39.8rem;
  cursor: pointer;
`;
