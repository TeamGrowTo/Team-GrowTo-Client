import { lectureDataList } from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.button<{ isDisable: boolean; isSelected: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: white;
  position: relative;
  height: 4.8rem;
  padding: 1.6rem 2.7rem;
  border: 1px solid ${(props) => (props.isSelected ? colors.mainBlue : "#e3e3e3")};
  border-radius: 4.8rem;

  font-family: "Pretendard-Medium";
  line-height: 4.8rem;
  & span {
    color: ${(props) => props.isDisable && colors.gray4};
  }
  transition: 200ms;
  box-shadow: 0 0.2rem 0.6rem 0 #5858580a;
  cursor: ${(props) => (props.isDisable ? "unset" : "pointer")};
  path {
    stroke: ${(props) => props.isDisable && colors.gray3};
  }
  &:hover {
    background-color: ${(props) => (props.isDisable ? "none" : colors.gray2)};
    transition: 200ms;
  }

  &:focus {
    background-color: white;
    border: 1px solid ${colors.mainBlue};
    box-shadow: 0px 2px 12px rgba(69, 121, 255, 0.08);
    transition: 200ms;
    path {
      stroke: ${colors.mainBlue};
    }
  }

  & + & {
    margin-left: 1.2rem;
  }

  ${applyMediaQuery("mobile")} {
    height: 3.4rem;
    line-height: 3.4rem;
    padding: 1rem 1.2rem;
    & + & {
      margin-left: 0;
    }
  }
`;

export const DropDownBox = styled.ul`
  position: absolute;
  top: 5.4rem;
  left: 0;

  width: 18rem;
  z-index: 1;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 1.2rem;
  cursor: pointer;
  & button:first-child {
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }

  & button:last-child {
    border-bottom-left-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
  }

  ${applyMediaQuery("mobile")} {
    width: 14rem;
    top: 4rem;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const DropDownItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.7rem 2.4rem;

  text-align: left;
  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: ${colors.gray6};
  cursor: pointer;
  transition: 200ms;
  &:hover {
    font-family: "Pretendard-Bold";
  }

  &:active {
    background: ${colors.lightBlue};
  }
`;

export const CriteriaItem = styled.span`
  font-family: "Pretendard-Medium";
  color: ${(props) => props.color || colors.gray6};
  font-size: 1.4rem;
  margin-right: 0.8rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-left: 0.8rem;
  }
`;

export const CriteriaSelectedItem = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: ${colors.mainBlue};

  padding-left: 0.8rem;
  border-left: 1px solid #d3d3d3;
`;
