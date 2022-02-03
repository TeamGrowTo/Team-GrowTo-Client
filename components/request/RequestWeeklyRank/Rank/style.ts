import { RequestRankLine, RequestRankLine_mobile } from "public/assets/icons";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  margin-right: 2rem;

  ${applyMediaQuery("mobile")} {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 0.8rem;
  }
`;

const Id = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  color: ${colors.subOrange};
  margin-bottom: 0.8rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  width: 30.5rem;
  height: 10.8rem;
  background-color: ${colors.gray1};
  border-radius: 2.8rem;

  display: flex;
  padding: 1.4rem 3.6rem;
  align-items: center;

  position: relative;
  z-index: -1;

  ${applyMediaQuery("mobile")} {
    width: 27.5rem;
    height: 6.8rem;
    border-radius: 1.8rem;
    padding: 1rem 3.2rem;

    margin-left: 1.2rem;
  }
`;

const Title = styled.div`
  h4 {
    font-family: "Pretendard-Bold";
    font-size: 1.6rem;
    color: ${colors.gray5};
    margin-bottom: 0.4rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
    }
  }
  h3 {
    font-family: "Pretendard-Bold";
    color: ${colors.subBlack};
    font-size: 2rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
`;
const Line = styled(RequestRankLine)`
  position: absolute;
  left: 16.4rem;
`;

const MobileLine = styled(RequestRankLine_mobile)`
  position: absolute;
  left: 16rem;
`;

const RequestNumber = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  right: 3.6rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    right: 3.2rem;
  }

  h5 {
    font-family: "Pretendard-Bold";
    margin-bottom: 0.4rem;

    ${applyMediaQuery("mobile")} {
      margin-bottom: 0.2rem;
    }
  }
`;

const Number = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  display: flex;

  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
  }
  p {
    color: ${colors.mainBlue};
    font-family: "Pretendard-Bold";
  }
`;

export { Id, Line, MobileLine, Number, RequestNumber, StyledRoot, Title, Wrapper };
