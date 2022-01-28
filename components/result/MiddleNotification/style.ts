import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5.6rem;
  flex-wrap: wrap;
  background-color: white;
`;

const NotiBox = styled.div`
  display: flex;
  align-items: center;
  width: 84.6rem;
  min-height: 10.4rem;
  border: 0.1rem solid ${colors.gray3};
  border-radius: 2.8rem;
  margin-bottom: 5.6rem;

  & > svg {
    width: 4rem;
    height: 4rem;
    margin: 0 1.2rem 0 4.4rem;
  }
`;

const NotiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.gray6};
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
`;

const NotiTitle = styled.span`
  margin-bottom: 0.8rem;
  & > span {
    color: ${colors.subOrange};
  }
`;

const Content = styled.p`
  & > span {
    color: ${colors.subOrange};
  }
`;

export { Content, NotiBox, NotiTitle, NotiWrapper, StyledRoot };
