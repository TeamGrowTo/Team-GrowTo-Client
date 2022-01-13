import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
`;

const NotiBox = styled.div`
  display: flex;
  align-items: center;
  width: 84.6rem;
  min-height: 10.4rem;
  border: 0.1rem solid ${colors.gray3};
  border-radius: 2.8rem;

  & > svg {
    width: 4rem;
    height: 4rem;
    margin: 0 1.2rem 0 4.4rem;
  }
`;

const NotiWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotiTitle = styled.span`
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  color: ${colors.gray5};
  margin-bottom: 0.8rem;
`;

const Content = styled.p`
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  color: ${colors.subBlack};
`;

export { Content, NotiBox, NotiTitle, NotiWrapper, StyledRoot };
