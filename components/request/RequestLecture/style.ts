import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 70rem;
  background: linear-gradient(to right, #466ed4, #9ba5ff);
  background-image: url("/assets/images/requestLectureBackground.png");
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
  color: ${colors.white};
  line-height: 3.5rem;
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    margin-bottom: 0.8rem;
  }
  p {
    font-family: "Pretendard-Regular";
    font-size: 2.8rem;
  }
`;

const RequestCard = styled.div`
  width: 100%;
  height: 54.6rem;
  border-top-right-radius: 2.8rem;
  border-top-left-radius: 2.8rem;
  background-color: rgb(255, 255, 255, 0.65);
  backdrop-filter: blur(10rem);
  border: 0.3rem solid white;
  position: absolute;
  top: 15.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.2rem;
`;

const DisabledRequestButton = styled.button`
  width: 63rem;
  height: 6.8rem;
  border-radius: 4.8rem;
  background-color: ${colors.gray3};

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: ${colors.gray4};
  }
`;
const ActiveRequestButton = styled.button`
  width: 63rem;
  height: 6.8rem;
  border-radius: 4.8rem;
  background-color: ${colors.mainBlue};
  cursor: pointer;

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: white;
  }
`;

export { ActiveRequestButton, DisabledRequestButton, RequestCard, StyledRoot, Title, Wrapper };
