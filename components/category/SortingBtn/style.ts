import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: white;
  position: relative;
  height: 4.8rem;
  padding: 1.6rem 2.7rem;

  border: 1px solid #E3E3E3;
  border-radius: 4.8rem;

  font-family: "Pretendard-Medium";
  color: ${colors.gray6}
  transition: 200ms;
  
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray2};
    transition: 200ms;
  }

  &:focus {
    background-color: white;
    color: ${colors.mainBlue};
    border: 1px solid ${colors.mainBlue};
    box-shadow: 0px 2px 12px rgba(69, 121, 255, 0.08);
    transition: 200ms;
  }

  & + & {
    margin-left: 1.2rem;
  }
`;

const DropDownBox = styled.ul`
  position: absolute;
  top: 5.4rem;
  left: 0;

  width: 18rem;

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
`;

const DropDownItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.7rem 2.4rem;

  text-align: left;
  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  color: ${colors.gray6};

  cursor: pointer;
  &:hover {
    background: ${colors.lightBlue};
  }
`;
const CriteriaItem = styled.span`
  font-family: "Pretendard-Medium";
  color: ${(props) => props.color || colors.gray3};
  font-size: 1.4rem;
  & + & {
    margin-left: 0.8rem;
  }
`;

const BtnTextWrapper = styled.span`
  margin-right: 1.2rem;
`;

export { BtnTextWrapper, CriteriaItem, DropDownBox, DropDownItem, StyledRoot };
