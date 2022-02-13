import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const ResultBox = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  padding-bottom: 9.2rem;
  ${applyMediaQuery("mobile")} {
    padding-bottom: 4.9rem;
  }
`;

const ResultMessage = styled.h2`
  font-family: "Pretendard-SemiBold";
  display: inline;
  font-size: 3rem;
  line-height: 6rem;
  color: ${colors.subBlack};

  ${applyMediaQuery("mobile")} {
    text-align: left;
    font-size: 1.8rem;
    line-height: 2.7rem;
    letter-spacing: -0.01em;
  }
`;

const ResultBlueMessage = styled(ResultMessage)`
  color: ${colors.mainBlue};
`;

const NoResultMessage = styled(ResultMessage)`
  font-family: "Pretendard-regular";
  color: #b6b6b6;
`;

const MessageWrapper = styled.div`
  margin: auto;
  text-align: center;
  padding-bottom: 4.4rem;
  padding-top: 6.8rem;

  ${applyMediaQuery("mobile")} {
    text-align: left;
    padding-left: 1.6rem;
  }
`;

export { MessageWrapper, NoResultMessage, ResultBlueMessage, ResultBox, ResultMessage };
