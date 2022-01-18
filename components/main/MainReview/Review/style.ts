import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div<{ isTransparent: boolean }>`
  box-sizing: border-box;
  width: 31.6rem;
  height: 22.8rem;
  background-color: ${(props) =>
    props.isTransparent == true ? "rgb(225,225,225, 0.3)" : `${colors.gray1}`};
  background: linear-gradient(
    ${(props) => (props.isTransparent == true ? "150deg, white, 60%, transparent" : "")}
  );
  backdrop-filter: blur(10rem);
  border-radius: 2.4rem;
  padding: 2.4rem 2.8rem;
  margin-bottom: 3.1rem;
  margin-right: 3.2rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  position: relative;
`;

const Comment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  width: 26rem;
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