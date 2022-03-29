import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 102rem;
  height: 33rem;
  margin-top: 4rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-width: 0.2rem 0.2rem 0;
  border-color: white;
  border-style: solid;
  border-radius: 2.8rem 2.8rem 0 0;
`;
export const CategoryChoiceTitle = styled.div`
  margin-left: 6.4rem;
  margin-top: 5.2rem;
  & > p {
    font-size: 2.4rem;
    font-family: "Pretendard-Bold";
    color: ${colors.subBlack};
  }
  & > p > span {
    color: ${colors.subOrange};
  }
`;
