import styled from "styled-components";
import { colors } from "styles/colors";

const ResultBox = styled.div`
  width: 128rem;
  margin: 0 auto;
  padding-bottom: 19.2rem;
  border-bottom: solid 1px ${colors.gray2};
`;

const ResultMessage = styled.h2`
  font-family: "Pretendard-SemiBold";
  display: inline;
  font-size: 2.8rem;
  line-height: 6rem;
  color: black;
`;

const SelectedCategory = styled(ResultMessage)`
  color: #585858;
`;

const ResultCount = styled(ResultMessage)`
  color: ${colors.mainBlue};
`;

const MessageWrapper = styled.div`
  margin: auto;
  text-align: center;
  padding-bottom: 4.4rem;
  padding-top: 6.8rem;
`;

export { MessageWrapper, ResultBox, ResultCount, ResultMessage, SelectedCategory };
