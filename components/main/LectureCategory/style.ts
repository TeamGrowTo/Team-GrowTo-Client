import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  margin-top: 10.4rem;
  margin-bottom: 13.9rem;
  & > h3 {
    font-size: 3.8rem;
    line-height: 4.6rem;
    margin-bottom: 1rem;
    font-family: "Pretendard-Bold";
    color: ${colors.subBlack};
  }
  & > small {
    font-size: 1.8rem;
    color: ${colors.gray5};
    margin-bottom: 5.6rem;
    line-height: 2.2rem;
    font-family: "Pretendard-Regular";
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 75rem;
  flex-wrap: wrap;
  /* font-family: "Pretendard-Medium"; */
  & > * {
    margin-right: 2rem;
    margin-bottom: 2.2rem;
  }
  & > *:nth-child(3n) {
    margin-right: 0;
  }
  & > *:last-child {
    margin: 0;
  }
`;

export { CategoryWrapper, StyledRoot };
