import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 31.6rem;
  height: 22.8rem;
  background-color: ${colors.gray1};
  border-radius: 2.4rem;
  padding: 3.2rem 4rem 0 4rem;
  margin-bottom: 3.1rem;
  margin-right: 3.2rem;
  display: flex;
  flex-direction: column;

  position: relative;
`;

const Comment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  width: 23.6rem;
  line-height: 2.4rem;
`;

const Bottom = styled.div`
  height: 5.6rem;
  display: flex;
  align-items: center;

  position: absolute;
  left: 2.7rem;
  bottom: 2.5rem;
`;

const Id = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  width: 6.3rem;
  color: ${colors.gray5};
  margin-left: 1.2rem;
  line-height: 1.8rem;
`;

export { Bottom, Comment, Id, StyledRoot };
