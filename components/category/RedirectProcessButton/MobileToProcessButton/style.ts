import styled from "styled-components";

export const StyledRoot = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5.6rem;
  background: linear-gradient(90deg, #45a6ff 2.09%, #45d2ff 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.2rem;
  padding-right: 0.8rem;
`;

export const RedirectButton = styled.a`
  width: 9.8rem;
  height: 3.6rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    display: flex;
    color: white;
    font-size: 1.2rem;
    font-family: "Pretendard-Bold";
  }
`;

export const ImageWrapper = styled.div`
  margin-left: 0.2rem;
  width: 1rem;
  height: 1rem;
`;

export const Description = styled.div`
  color: white;
  font-size: 1.5rem;
  font-family: "Pretendard-Medium";
  display: flex;
  flex-direction: column;
`;

export const Highlight = styled.span`
  font-family: "Pretendard-Bold";
  font-size: 1.7rem;
`;
