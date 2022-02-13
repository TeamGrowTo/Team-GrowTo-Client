import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.article`
  display: flex;
  width: 100%;
  height: 5.6rem;
  font-size: 1.4rem;
  position: fixed;
  top: 4.8rem;
  z-index: 70;
  cursor: pointer;
`;

export const Category = styled.button`
  background-color: ${colors.mainBlue};
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 5.6rem;
  color: ${colors.gray6};
  display: flex;
  padding: 0;
  cursor: pointer;

  & > span {
    width: 90%;
    height: 100%;
    background: ${colors.blue3};
    font-size: 1.4rem;
    font-family: "Pretendard-SemiBold";
  }
`;

export const Skill = styled.button`
  background-color: ${colors.mainBlue};
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 5.6rem;
  color: white;
  font-size: 1.4rem;
  font-family: "Pretendard-SemiBold";
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  & > svg {
    position: absolute;
    top: 0;
    right: 50%;
  }
`;
