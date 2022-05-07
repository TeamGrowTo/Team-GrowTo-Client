import styled from "styled-components";

export const StyledRoot = styled.article`
  width: 100vw;
  max-width: 100%;

  & > section {
    button {
      display: none !important;
    }
  }
`;

export const SliderIndexBox = styled.aside`
  position: relative;
  top: 7rem;
  z-index: 10;
  width: 100%;
  height: 2.8rem;
  display: flex;
  justify-content: center;
`;

export const SliderIndexWrapper = styled.section`
  width: 100%;
  //136.4 + 2.8
  max-width: 139.2rem;
  display: flex;
  justify-content: end;
`;

export const ButtonBox = styled.section`
  position: relative;
  bottom: 5.7rem;
  width: 100%;
  height: 2.4rem;
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 133.5rem;
  display: flex;
  justify-content: start;
  padding: 0;
  padding-left: 2.8rem;
`;
