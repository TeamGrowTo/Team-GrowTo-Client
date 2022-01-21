import styled from "styled-components";

const Button = styled.button`
  width: 22.4rem;
  height: 10.8rem;
  font-size: 2.2rem;
  font-family: "Pretendard-Bold";
  //Semi-Bold로 변경 필요
  /* line-height: 2.6rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #f0f8ff 11.58%, #f6fbff 71%);
  border: 0.1rem solid white;
  box-sizing: border-box;
  box-shadow: 0 0.2rem 0.8rem 0.1rem rgba(69, 121, 255, 0.3);
  border-radius: 2.4rem;
  cursor: pointer;
  svg {
    margin-right: 1.4rem;
  }
  display: flex;
  align-items: center;
`;

export { Button };
