import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  width: 31.6rem;
  height: 22.8rem;
  background-color: ${colors.gray1};
  border-radius: 2.4rem;
`;

const Comment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  width: 23.6rem;
`;

const Bottom = styled.div`
  height: 5.6rem;
  display: flex;
  justify-content: center;
`;

const Id = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
`;

export { StyledRoot, Comment, Bottom, Id };
