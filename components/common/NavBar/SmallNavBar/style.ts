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
  z-index: 120;
`;

const ButtonWrapper = styled.button`
  cursor: pointer;
`;

const NavMenuList = styled.ul`
  position: absolute;
  top: 4.8rem;
  right: 0;
  width: 100%;
  height: 25rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  z-index: 1000;
  transition: all 600ms ease-in-out;
`;

const NavMenuListItem = styled.li`
  width: 90%;
  height: 5.1rem;
  font-family: "Pretendard-SemiBold";
  font-size: 1.6rem;
  line-height: 5.1rem;
  letter-spacing: -0.05em;
  transition: all 100ms;

  color: #606060;

  & button {
    font-family: "Pretendard-SemiBold";
    width: 100%;
    cursor: pointer;
  }
  &:hover {
    background-color: #f4f9ff;
  }
`;

const LinkA = styled.a`
  display: inline-block;
  width: 100%;
`;

export { ButtonWrapper, LinkA, NavMenuList, NavMenuListItem, StyledRoot };
