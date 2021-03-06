import styled from "styled-components";
import { colors } from "styles/colors";

// 유저가 현재 보는 화면에서 꽉차게 하는 것이 필요했다.
// 모바일은 폰마다 화면이 다르니 현재 화면을 반영하기 위해  vw, vh를 사용했음.
// 가로 스크롤이 생기는것을 방지하기 위해 아래 max-xxxx 코드도 추가해줬다.
export const StyledRoot = styled.article`
  position: fixed;
  left: 0;
  right: 0;
  top: 4.8rem;
  bottom: 0;
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

  /* &:focus {
    background-color: ${colors.subBlack};
  } */
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 100;
  text-align: center;
  overflow: hidden;
  //7.2 + 4.8
  margin-bottom: 12rem;
`;

export const RedirectRequestPage = styled.a`
  position: absolute;
  bottom: 4.8rem;
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
