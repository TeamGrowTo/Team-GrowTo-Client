import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.section`
  display: relative;
  left: 0;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
`;

export const CloseCategoryAndSkill = styled.div`
  width: 100%;
  min-height: 4.8rem;
  background-color: ${colors.mainBlue};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 2.7rem;
`;

export const BackButton = styled.button`
  color: white;
  font-size: 1.4rem;
  font-family: "Pretendard-Medium";
  cursor: pointer;
  & > svg {
    margin-right: 1.2rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 100;
  flex-grow: 1;
  text-align: none;
  margin-bottom: 12rem;
  overflow: hidden;
`;

export const RedirectRequestPage = styled.a`
  position: absolute;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7.2rem;
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  color: white;
  background: linear-gradient(0deg, rgba(5, 0, 255, 0.2), rgba(5, 0, 255, 0.2)),
    linear-gradient(0deg, rgba(112, 1, 255, 0.05), rgba(112, 1, 255, 0.05)),
    linear-gradient(129.07deg, rgba(138, 186, 197, 0.21) 2.5%, rgba(16, 3, 20, 0) 72.4%),
    linear-gradient(180deg, #b9fbff -5.17%, #d1c9f1 95%);
  & > svg {
    margin-left: 0.8rem;
    path {
      stroke: white;
    }
  }
`;
