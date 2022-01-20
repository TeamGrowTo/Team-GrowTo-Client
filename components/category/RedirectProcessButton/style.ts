import styled from "styled-components";

const StyledRoot = styled.div`
  position: fixed;
  top: 11.6rem;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 36.8rem;
  padding-right: 46.2rem;
  background: linear-gradient(90deg, #a484fe 30.96%, #5c00f1 97.53%);
  z-index: 3;
`;

const Description = styled.h3`
  color: white;
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 1.6rem;
  }
`;

const RedirectButton = styled.a`
  width: 16.8rem;
  height: 3.6rem;
  text-align: center;
  line-height: 3.6rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  color: white;
  font-size: 1.6rem;
  font-family: "Pretendard-Bold";
  cursor: pointer;
  & > svg {
    margin-left: 0.8rem;
  }
`;

export { Description, RedirectButton, StyledRoot };
