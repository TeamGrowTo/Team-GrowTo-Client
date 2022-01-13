import styled from "styled-components";
import { colors } from "styles/colors";

const Background = styled.section`
  background-color: #F9F9F9;
  width: 100%;
  height: 100%;
`;

const ResultBox = styled.div`
  width: 128rem;
  margin: 0 auto;
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

export {Background, ResultBox, ResultCount, SelectedCategory, ResultMessage, MessageWrapper}
