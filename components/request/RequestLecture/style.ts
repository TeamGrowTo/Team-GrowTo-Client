import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 87.5rem;
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
  width: 110.5rem;
  height: 100%;
  padding-top: 6.125rem;
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
    font-size: 5rem;
    margin-bottom: 1rem;
    ${applyMediaQuery("mobile")} {
      font-size: 2.2rem;
      margin-bottom: 0.6rem;
    }
  }
  p {
    font-family: "Pretendard-SemiBold";
    font-size: 3.5rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
`;

export const RequestCard = styled.div`
  width: 100%;
  height: 68.25rem;
  border-top-right-radius: 3.5rem;
  border-top-left-radius: 3.5rem;
  background: radial-gradient(
    97.57% 210.75% at 0.9% 2.98%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background-color: rgb(255, 255, 255, 0.65);
  backdrop-filter: blur(17.5rem);
  border: 0.25rem solid white;
  position: absolute;
  top: 19.25rem;
  padding-top: 5.25rem;
  ${applyMediaQuery("mobile")} {
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
  width: 78.75rem;
  height: 8.5rem;
  border-radius: 6rem;
  background-color: ${colors.gray2};
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4.8rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2.5rem;
    color: ${colors.gray4};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;

export const ActiveRequestButton = styled.button`
  width: 78.75rem;
  height: 8.5rem;
  border-radius: 6rem;
  background-color: ${colors.mainBlue};
  cursor: pointer;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4.8rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2.5rem;
    color: ${colors.white};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;
