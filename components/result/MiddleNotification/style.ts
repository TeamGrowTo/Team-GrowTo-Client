import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  /* padding-bottom: 5.6rem; */
  flex-wrap: wrap;
  background-color: white;
  ${applyMediaQuery("mobile")} {
    padding: 0 1.6rem;
`;

const NotiBox = styled.div`
  display: flex;
  align-items: center;
  width: 84.6rem;
  min-height: 10.4rem;
  border: 0.1rem solid ${colors.gray3};
  border-radius: 2.8rem;
  margin-bottom: 5.6rem;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: auto;
    margin-bottom: 3.2rem;
  }

  & > svg {
    width: 4rem;
    height: 4rem;
    margin: 0 1.2rem 0 4.4rem;
    ${applyMediaQuery("mobile")} {
      margin: 0 1.2rem 0 2rem;
    }
  }
`;

const NotiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.gray6};
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    margin-right: 2.4rem;
    max-width: 23.2rem;
  }
`;

const NotiTitle = styled.span`
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  & > span {
    color: ${colors.subOrange};
  }
  ${applyMediaQuery("mobile")} {
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
  }
`;

const Content = styled.p`
  line-height: 1.8rem;
  font-size: 1.6rem;
  & > span {
    color: ${colors.subOrange};
  }
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
  }
`;

export { Content, NotiBox, NotiTitle, NotiWrapper, StyledRoot };
