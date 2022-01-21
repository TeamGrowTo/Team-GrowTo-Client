import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: column;
  padding: 1.8rem 1.4rem;
`;

const LectureTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LectureTitleName = styled.h3`
  font-family: "Pretendard-Bold";
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: left;
  color: ${colors.subBlack};
`;

export { LectureTitleBox, LectureTitleName, StyledRoot };
