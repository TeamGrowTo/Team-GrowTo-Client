import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  position: fixed;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  width: 120rem;
  height: 54.2rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 2.8rem;
  ${applyMediaQuery("mobile")} {
    /* top: 21rem; */
    /* margin: 10.4rem 0 5.6rem 0; */
    margin-top: 4.8rem;
    padding: 1.6rem;
    padding-top: 2.4rem;
    width: 32.8rem;
    height: 53rem;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-left: 6.6rem;
  margin-top: 3.9rem;
  & > p {
    font-size: 2.9rem;
    font-family: "Pretendard-Bold";
    color: ${colors.mainBlue};
    margin-bottom: 3.2rem;
  }
  ${applyMediaQuery("mobile")} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    line-height: 1.9rem;
    margin: 0;
    margin-bottom: 2.4rem;
    & > p {
      font-size: 2rem;
      margin: 0;
    }
  }
`;

const Title = styled.h3`
  color: ${colors.gray5};
  font-size: 2.9rem;
  font-family: "Pretendard-Bold";
  margin-bottom: 1rem;
  ${applyMediaQuery("mobile")} {
    width: 15rem;
    font-size: 1.6rem;
    margin: 0;
    text-align: center;
  }
`;

const InputWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
  }
`;

const EssentialInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
  & > * {
    margin-bottom: 3.2rem;
    ${applyMediaQuery("mobile")} {
      margin-bottom: 2rem;
    }
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;

const ReportButton = styled.button<{ isBlank: boolean }>`
  text-align: center;
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  width: 50.2rem;
  height: 6rem;
  border-radius: 4.8rem;
  background-color: #eeeeee;
  color: #d0d0d0;
  ${({ isBlank }) =>
    isBlank
      ? css`
          background-color: ${colors.gray2};
          color: ${colors.gray4};
        `
      : css`
          background-color: ${colors.mainBlue};
          color: white;
          cursor: pointer;
        `}

  ${applyMediaQuery("mobile")} {
    font-size: 1.6rem;
    width: 100%;
    height: 4.8rem;
    margin-bottom: 1.6rem;
  }
`;

const Line = styled.div`
  width: 0.05rem;
  height: 36.7rem;
  background-color: ${colors.gray3};
  margin: 0 3.2rem;
`;

export {
  EssentialInput,
  InputWrapper,
  Line,
  ReportButton,
  StyledRoot,
  TextArea,
  Title,
  TitleWrapper,
};
