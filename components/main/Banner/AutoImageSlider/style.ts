import styled from "styled-components";

export const StyledRoot = styled.article`
  button {
    display: none !important;
  }
`;

export const SliderIndexWrapper = styled.aside`
  position: relative;
  top: 7rem;
  z-index: 10;
  width: 100%;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  & > section {
    width: 100%;
    max-width: 132.1rem;
    display: flex;
    justify-content: end;
  }
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
  max-width: 132.1rem;
  display: flex;
  justify-content: start;
`;
