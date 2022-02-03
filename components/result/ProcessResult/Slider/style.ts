import styled from "styled-components";

const StyledRoot = styled.section`
  padding: 1.6rem 1.6rem 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SliderBox = styled.article`
  margin: 0 1rem;
  width: 29.6rem;
  overflow-x: hidden;
`;

const SliderWrapper = styled.div<{ page: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform linear 0.1s 0.3s;
  transform: translateX(-${({ page }) => page * 31.6}rem);
  & > * {
    margin-right: 2rem;
  }
`;

const SliderIconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    /* background-color: yellow; */
  }
`;

export { SliderBox, SliderIconWrapper, SliderWrapper, StyledRoot };
