import styled from 'styled-components';

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
`;

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 33rem;
`;

const NavItem = styled.a`
  margin: 0 22px;
  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  letter-spacing: -0.05em;
  color: #606060;
  `;

const LogoWrapper = styled.a`
  margin-right: 10.4rem;
  cursor: pointer;
`;

export {
  StyledRoot,
  NavItemBox,
  NavItemWrapper,
  NavItem,
  LogoWrapper,
}