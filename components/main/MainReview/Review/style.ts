import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 31.6rem;
  height: 22.8rem;
  background-color: ${colors.gray1};
  border-radius: 2.4rem;
  padding: 3.2rem 4rem 0 4rem;

  display: flex;
  flex-direction: column;

  position: relative;
`;

const Comment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  width: 23.6rem;
`;

const Bottom = styled.div`
  height: 5.6rem;
  display: flex;

  position: absolute;
  right: 2rem;
  bottom: 2.3rem;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Id = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.8rem;
  width: 4.7rem;

  position: absolute;
  z-index: 1;
  bottom: 1.9rem;
  right: 0.2rem;
`;

export { Bottom, Comment, Id, StyledRoot, Wrapper };
