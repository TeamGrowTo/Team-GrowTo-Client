import styled from "styled-components";

export const BackGround = styled.div<{ isBlur: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.isBlur ? 0.7 : undefined)};
  background-color: ${(props) => (props.isBlur ? "rgba(0,0,0,0.7)" : undefined)};
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: white;
  width: 50rem;
  height: 30rem;
  & > p {
    text-align: center;
    margin-top: 10rem;
    font-size: 3.6rem;
  }
`;
