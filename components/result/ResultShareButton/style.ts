import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.2rem;
  padding-bottom: 4rem;
  background-color: white;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mainBlue};
  border-radius: 4.8rem;
  min-width: 63rem;
  min-height: 6.8rem;
  &:hover {
    cursor: pointer;
  }
  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.2rem;
  }
  & > span {
    font-size: 2rem;
    font-family: "Pretendard-Bold";
    color: white;
  }
`;

export { ShareButton, StyledRoot };
