import styled from "styled-components";
import { colors } from "styles/colors";

const ResultBox = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  padding-bottom: 19.2rem;
`;

const ResultMessage = styled.h2`
  font-family: "Pretendard-SemiBold";
  display: inline;
  font-size: 2.8rem;
  line-height: 6rem;
  color: ${colors.subBlack};
`;

const ResultBlueMessage = styled(ResultMessage)`
  color: ${colors.mainBlue};
`;

const MessageWrapper = styled.div`
  margin: auto;
  text-align: center;
  padding-bottom: 4.4rem;
  padding-top: 6.8rem;
`;

export { MessageWrapper, ResultBlueMessage, ResultBox, ResultMessage };
