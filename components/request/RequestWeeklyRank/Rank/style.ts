import { RequestRankLine } from "public/assets/icons";
import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  margin-right: 2rem;
`;

const Id = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  color: ${colors.subOrange};
  margin-bottom: 0.8rem;
`;

const Wrapper = styled.div`
  width: 30.5rem;
  height: 10.8rem;
  background-color: ${colors.gray0};
  border-radius: 2.8rem;

  display: flex;
  padding: 1.4rem 3.6rem;
  align-items: center;

  position: relative;
  z-index: -1;

  /* & > svg {
    position: absolute;
    left: 16.4rem;
  } */
`;

const Line = styled(RequestRankLine)`
  position: absolute;
  left: 16.4rem;
`;

const Title = styled.div`
  h4 {
    font-family: "Pretendard-Bold";
    font-size: 1.6rem;
    color: ${colors.gray5};
    margin-bottom: 0.4rem;
  }
  h3 {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
  }
`;

const RequestNumber = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  right: 3.6rem;
  h5 {
    font-family: "Pretendard-Bold";
    margin-bottom: 0.4rem;
  }
`;

const Number = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  display: flex;
  p {
    font-family: "Pretendard-Bold";
    color: ${colors.mainBlue};
  }
`;

export { Id, Line, Number, RequestNumber, StyledRoot, Title, Wrapper };
