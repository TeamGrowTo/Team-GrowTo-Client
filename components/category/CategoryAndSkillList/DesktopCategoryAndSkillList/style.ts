import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CategoryAndSkillWrapper = styled.section`
  width: 128rem;
`;

export const Title = styled.h1<{ currentSkillId: number | null | undefined }>`
  font-size: 3.6rem;
  font-family: "Pretendard-Bold";
  color: ${colors.subBlack};
  margin-top: ${({ currentSkillId }) =>
    currentSkillId && currentSkillId !== -1 ? "12.4rem" : "6.4rem"};

  margin-bottom: 3.6rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  ${applyMediaQuery("desktop")} {
    justify-content: end;
  }
  ${applyMediaQuery("mobile")} {
    display: none;
  }
`;

export const RedirectRequestPage = styled.a`
  border: 0;
  font-size: 1.4rem;
  font-family: "Pretendard-Regular";
  color: ${colors.gray6};
  margin-bottom: 4.3rem;
  cursor: pointer;
  & > svg {
    margin-left: 1rem;
  }
`;
