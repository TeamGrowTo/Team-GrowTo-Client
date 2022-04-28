import styled from "styled-components";

export const StyledRoot = styled.aside`
  position: absolute;
  top: 29.8rem;
  right: 10rem;
  padding-top: 10.8rem;
  width: auto;
  height: 100%;
`;

export const StickyContent = styled.article`
  position: sticky;
  top: 12rem;
  width: 20.8rem;
  height: 12.8rem;
  background: linear-gradient(90deg, #45a6ff 2.09%, #45d2ff 100%);
  box-shadow: 0 0.6rem 1.8rem rgba(0, 0, 0, 0.22);
  border-radius: 4.8rem;
`;

export const RedirectButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h3 {
    display: flex;
    color: white;
    font-size: 2.1rem;
    font-family: "Pretendard-ExtraBold";
    margin-bottom: 0.7rem;
  }
`;

export const ImageWrapper = styled.div`
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
`;

export const Line = styled.div`
  width: 14.4rem;
  height: 0.1rem;
  background-color: white;
`;

export const Description = styled.div`
  width: 14.8rem;
  color: white;
  font-size: 1.5rem;
  font-family: "Pretendard-Medium";
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;

  & > span:last-child {
    margin-left: 0.8rem;
  }
`;

export const Highlight = styled.span`
  font-family: "Pretendard-Bold";
  font-size: 1.7rem;
`;
