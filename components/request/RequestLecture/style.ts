import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70rem;
  background: linear-gradient(to left, #9ba5ff, #466ed4);
  background-image: url("/assets/images/requestLectureBackground.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    height: 48rem;
    background: linear-gradient(to top, #9aa4ff, #617fe2);
  }
`;

export const Wrapper = styled.div`
  width: 88.6rem;
  height: 100%;
  padding-top: 4.9rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${applyMediaQuery("mobile")} {
    width: 36rem;
    padding-top: 2.4rem;
  }
`;

export const Title = styled.div`
  color: ${colors.white};

  h2 {
    font-family: "Pretendard-SemiBold";
    font-size: 4rem;
    margin-bottom: 0.8rem;
    ${applyMediaQuery("mobile")} {
      font-size: 2.2rem;
      margin-bottom: 0.6rem;
    }
  }
  p {
    font-family: "Pretendard-SemiBold";
    font-size: 2.8rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
`;

export const RequestCard = styled.div`
  width: 100%;
  height: 54.6rem;
  border-top-right-radius: 2.8rem;
  border-top-left-radius: 2.8rem;
  background-color: rgb(255, 255, 255, 0.65);
  backdrop-filter: blur(10rem);
  border: 0.3rem solid white;
  position: absolute;
  top: 15.4rem;
  padding-top: 4.2rem;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 39.3rem;
    border: 0.2rem solid white;
    top: 8.8rem;
    padding: 2.8rem 1.6rem 2.4rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DisabledRequestButton = styled.button`
  width: 63rem;
  height: 6.8rem;
  border-radius: 4.8rem;
  background-color: ${colors.gray2};
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4.8rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: ${colors.gray4};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;

export const ActiveRequestButton = styled.button`
  width: 63rem;
  height: 6.8rem;
  border-radius: 4.8rem;
  background-color: ${colors.mainBlue};
  cursor: pointer;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4.8rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: ${colors.white};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;
