import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.nav`
  width: 100%;
  height: 11.6rem;
  padding: 0 2.5rem;
  min-width: 55rem;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  background-color: white;
`;

const NavItemBox = styled.div`
  width: 100%;
  max-width: 128rem;
  min-width: 54rem;
  display: flex;
  align-items: center;
`;

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 33rem;
`;

const NavItem = styled.a<{ pathName: string; href: string }>`
  margin: 0 0.2rem;
  padding: 0 2.2rem;
  height: 11.6rem;
  line-height: 11.6rem;
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  letter-spacing: -0.05em;
  color: #606060;
  border-bottom: ${(props) =>
    props.pathName === props.href ? `solid 3px ${colors.gray5}` : "none"};
`;

const LogoWrapper = styled.a`
  margin-right: 10.4rem;
  cursor: pointer;
`;

export { LogoWrapper, NavItem, NavItemBox, NavItemWrapper, StyledRoot };
