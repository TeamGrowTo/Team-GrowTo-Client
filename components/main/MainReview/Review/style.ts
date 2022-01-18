import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 31.6rem;
  height: 22.8rem;
  background-color: ${colors.gray1};
  border-radius: 2.4rem;
  padding: 2.4rem 2.8rem;
  margin-bottom: 3.1rem;
  margin-right: 3.2rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  position: relative;
`;

const Comment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
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

const ImgWrapper = styled.div`
  width: 7.2rem;
  height: 7.2rem;
`;

const Introduce = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  color: ${colors.gray6};
  margin-left: 1.2rem;
  line-height: 1.8rem;
`;

export { Bottom, Comment, ImgWrapper, Introduce, StyledRoot };
