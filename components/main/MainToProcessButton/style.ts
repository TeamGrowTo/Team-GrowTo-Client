import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 11.2rem;
`;

export const ButtonWrapper = styled.article`
  width: 93.2rem;
  height: 9.6rem;
  background: linear-gradient(90deg, #45a6ff 2.09%, #45deff 100%);
  color: white;
  padding-left: 5.2rem;
  padding-right: 4.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2.4rem;
`;

export const Description = styled.aside`
  h3 {
    font-size: 2.4rem;
    font-family: "Pretendard-ExtraBold";
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 1.7rem;
    font-family: "Pretendard-Medium";
    line-height: 2rem;
    strong {
      font-size: 2rem;
      font-family: "Pretendard-Bold";
      line-height: 2.4rem;
    }
  }
`;

export const ToProcessButton = styled.a`
  width: 18.6rem;
  height: 5.6rem;
  background-color: ${colors.blue6};
  border-radius: 4.4rem;
  color: white;
  font-size: 2rem;
  font-family: "Pretendard-Bold";
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  padding-left: 2.9rem;
  padding-right: 2.1rem;

  &:hover {
    cursor: pointer;
  }

  span {
    margin-left: 1.3rem;
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
  }
`;
