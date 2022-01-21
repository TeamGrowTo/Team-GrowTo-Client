import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.button`
  position: fixed;
  bottom: 4.4rem;
  right: 8.2rem;
  background-color: ${colors.mainBlue};
  color: white;
  border-radius: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.9rem;
  height: 4.8rem;
  box-shadow: 0 0.6rem 1.8rem rgba(0, 0, 0, 0.22);

  &:hover {
    cursor: pointer;
  }

  & > span {
    margin-right: 1.7rem;
    line-height: 1.9rem;
    font-size: 1.6rem;
    font-family: "Pretendard-Bold";
  }
`;

export { StyledRoot };
