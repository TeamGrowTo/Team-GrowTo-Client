import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.nav`
  width: 100%;
  height: 4.8rem;
  padding: 0 1.4rem 0 2rem;

  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 90;
`;

const ButtonWrapper = styled.button`
  cursor: pointer;
`;

const NavMenuList = styled.ul`
  position: absolute;
  top: 4.8rem;
  right: 0;
  width: 100%;
  height: 20rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  z-index: 1000;
`;

const NavMenuListItem = styled.li`
  width: 90%;
  height: 5.1rem;
  font-family: "Pretendard-SemiBold";
  font-size: 1.6rem;
  line-height: 5.1rem;
  letter-spacing: -0.05em;

  color: #606060;
  & > a {
    display: inline-block;
    width: 100%;
  }
  & button {
    width: 100%;
    cursor: pointer;
  }
  &:hover {
    background-color: #f4f9ff;
  }
`;

export { ButtonWrapper, NavMenuList, NavMenuListItem, StyledRoot };
