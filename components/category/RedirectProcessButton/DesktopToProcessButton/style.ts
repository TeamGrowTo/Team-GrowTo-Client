import styled, { css } from "styled-components";

export const StyledRoot = styled.aside`
  /* position: absolute;
  top: 29.8rem;
  right: 10rem;
  padding-top: 10.8rem;
  width: auto;
  height: 100%; */
`;

export const StickyContent = styled.article<{ isOpen: boolean }>`
  /* position: sticky;
  top: 12rem; */
  position: fixed;
  bottom: 7rem;
  right: 10rem;
  z-index: 100;
  width: 20.8rem;
  height: 15.2rem;
  background: linear-gradient(90deg, #45a6ff 2.09%, #45d2ff 100%);
  box-shadow: 0 0.6rem 1.8rem rgba(0, 0, 0, 0.22);
  border-radius: 4.8rem;
  transition: all 0.1s ease-in;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      width: 9rem;
      height: 9rem;
    `}
`;

export const ReduceIconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 1.6rem 0 1.3rem 3.6rem;
  cursor: pointer;
`;

export const ReduceCustomLectureButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > span {
    width: 3.6rem;
    height: 4.8rem;
    font-size: 2rem;
    font-family: "Pretendard-ExtraBold";
    line-height: 2.4rem;
    color: white;
  }
`;

export const RedirectButton = styled.a<{ isOpen: boolean }>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  cursor: pointer;
  padding: 0 3.5rem;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `};
`;

export const Title = styled.h3`
  display: flex;
  color: white;
  font-size: 2.1rem;
  font-family: "Pretendard-ExtraBold";
  margin-bottom: 0.7rem;
`;

export const ImageWrapper = styled.div`
  margin-left: 0.4rem;
  width: 1.4rem;
  height: 1.4rem;
`;

export const Line = styled.div`
  width: 14.4rem;
  height: 0.1rem;
  background-color: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.8rem;
  color: white;
  font-size: 1.5rem;
  font-family: "Pretendard-Medium";
  margin-top: 0.8rem;
  line-height: 2rem;

  & > span:last-child {
    margin-left: 0.8rem;
  }
`;

export const Highlight = styled.span`
  font-family: "Pretendard-Bold";
  font-size: 1.7rem;
`;
