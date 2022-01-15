import styled from "styled-components";
import { colors } from "styles/color";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 70rem;
  background-color: ${colors.mainBlue};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 88.6rem;
  height: 100%;
  padding-top: 4.9rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  color: white;
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    margin-bottom: 0.8rem;
  }
  p {
    font-family: "Pretendard-Bold";
    font-size: 2.8rem;
  }
`;

const RequestCard = styled.div`
  width: 100%;
  height: 54.6rem;
  border-top-right-radius: 2.8rem;
  border-top-left-radius: 2.8rem;
  background-color: whitesmoke;
  opacity: 75%;
  position: absolute;
  top: 15.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.2rem;
`;

const RequestButton = styled.button``;

export { RequestButton, RequestCard, StyledRoot, Title, Wrapper };
