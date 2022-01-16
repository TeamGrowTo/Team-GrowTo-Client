import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CategoryAndSkillWrapper = styled.div`
  width: 128rem;
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-family: "Pretendard-Bold";
  color: ${colors.subBlack};
  margin-bottom: 3.6rem;
`;

const RedirectRequestPage = styled.a`
  border: 0;
  font-size: 1.4rem;
  font-family: "Pretendard-Regular";
  color: ${colors.gray6};
  margin-top: 0.8rem;
`;

export { CategoryAndSkillWrapper, RedirectRequestPage, StyledRoot, Title };
