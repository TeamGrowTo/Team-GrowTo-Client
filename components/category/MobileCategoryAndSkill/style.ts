import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.article`
  display: flex;
  width: 100%;
  height: 5.6rem;
  font-size: 1.4rem;
  position: fixed;
  top: 4.8rem;
  z-index: 70;
  cursor: pointer;
`;

const Category = styled.div`
  background-color: ${colors.mainBlue};
  width: 100%;
  text-align: center;
  line-height: 5.6rem;
  color: ${colors.gray6};
  display: flex;
  & > div {
    background: ${colors.blue3};
    width: 40%;
  }
  & > svg {
    position: absolute;
    top: 0;
    right: 50%;
  }
  & > text {
    font-size: 1.4rem;
    font-family: "Pretendard-Medium";
    position: absolute;
    left: 20%;
  }
`;

const Skill = styled.div`
  background-color: ${colors.mainBlue};
  width: 100%;
  text-align: center;
  line-height: 5.6rem;
  color: white;
  font-size: 1.4rem;
  font-family: "Pretendard-Medium";
`;

export { Category, Skill, StyledRoot };
