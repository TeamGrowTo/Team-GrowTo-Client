import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  position: fixed;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  z-index: 151;
  transform: translate(-50%, -50%);
  width: 120rem;
  height: 54.2rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 2.8rem;
  ${applyMediaQuery("mobile")} {
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

export const CloseIconWrapper = styled.button`
  position: absolute;
  top: 2.8rem;
  right: 2.8rem;
  padding: 0;
  cursor: pointer;
  ${applyMediaQuery("mobile")} {
    top: 2.4rem;
    right: 2.4rem;
  }

  &:focus {
    border: 0.1rem solid ${colors.subBlack};
  }

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    ${applyMediaQuery("mobile")} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  margin-left: 6.6rem;
  margin-top: 3.9rem;
  ${applyMediaQuery("mobile")} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    line-height: 1.9rem;
    margin: 0;
    margin-bottom: 2.4rem;
  }

  & > p {
    font-size: 2.8rem;
    font-family: "Pretendard-Bold";
    color: ${colors.mainBlue};
    margin-bottom: 3.2rem;
    ${applyMediaQuery("mobile")} {
      font-size: 2rem;
      margin-bottom: 2.4rem;
    }
  }
`;

export const Title = styled.h3`
  color: ${colors.gray5};
  font-size: 2.8rem;
  font-family: "Pretendard-Bold";
  margin-bottom: 1rem;
  ${applyMediaQuery("mobile")} {
    width: 15rem;
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    text-align: center;
  }
`;

export const InputWrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

export const EssentialInput = styled.div`
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

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
    margin-top: 2rem;
  }
`;

export const ReportButton = styled.button<{ isDisabled: boolean }>`
  text-align: center;
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  width: 50.2rem;
  height: 6rem;
  border-radius: 4.8rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.6rem;
    width: 100%;
    height: 4.8rem;
    margin-bottom: 1.6rem;
  }

  ${({ isDisabled }) =>
    isDisabled
      ? css`
          background-color: ${colors.gray2};
          color: ${colors.gray4};
        `
      : css`
          background-color: ${colors.mainBlue};
          color: white;
          cursor: pointer;
          &:focus {
            border: 0.1rem solid ${colors.subBlack};
          }
        `}
`;

export const Line = styled.div`
  width: 0.05rem;
  background-color: ${colors.gray3};
  margin: 1rem 3.2rem 1.8rem 3.2rem;
`;
