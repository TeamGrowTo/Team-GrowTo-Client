import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  font-family: "Pretendard-Bold";
  color: ${colors.gray4};
  & > div {
    color: ${colors.subOrange};
    font-size: 3.2rem;
    margin-top: 20rem;
    margin-bottom: 1rem;
  }
  & > p {
    font-size: 2.8rem;
    text-align: center;
    line-height: 4rem;
    margin-bottom: 14.6rem;
  }
  & > button {
    position: absolute;
    bottom: 5.4rem;
    background: ${colors.mainBlue};
    border-radius: 4.8rem;
    width: 39.8rem;
    height: 6rem;
    text-align: center;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Highlight = styled.span`
  color: ${colors.subBlack};
`;
