import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #969696;
  //상세한 css가 나올 시 변경 필요
  border-radius: 4.8rem;
  min-width: 63rem;
  min-height: 6.8rem;
  &:hover {
    cursor: pointer;
  }
  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;
  }
  & > span {
    font-size: 2rem;
    font-family: "Pretendard-Bold";
    color: white;
  }
`;

export { StyledRoot, ShareButton };
