import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.aside`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  ${applyMediaQuery("mobile")} {
    padding: 0 1.6rem;
  }
`;

export const NotiBox = styled.article`
  display: flex;
  align-items: center;
  max-width: 84.6rem;
  width: 100%;
  min-height: 10.4rem;
  height: 100%;
  border: 0.1rem solid ${colors.gray3};
  border-radius: 2.8rem;
  margin-bottom: 5.6rem;
  padding: 0 4.5rem 0 4.4rem;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: auto;
    margin-bottom: 3.2rem;
    padding: 0 2.4rem 0 2rem;
  }
`;

export const NotiWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: ${colors.gray6};
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  margin-left: 1.2rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const NotiTitle = styled.header`
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
    width: 100%;
  }
  & > span {
    color: ${colors.subOrange};
  }
`;

export const Content = styled.p`
  line-height: 1.8rem;
  font-size: 1.6rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    width: 100%;
  }
  & > span {
    color: ${colors.subOrange};
  }
`;
