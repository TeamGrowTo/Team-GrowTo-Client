import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CategoryAndSkillWrapper = styled.div`
  width: 128rem;
`;

const Title = styled.h1<{ currentSkillId: number | null | undefined }>`
  font-size: 3.6rem;
  font-family: "Pretendard-Bold";
  color: ${colors.subBlack};
  margin-top: ${({ currentSkillId }) =>
    currentSkillId && currentSkillId !== -1 ? "12.4rem" : "6.4rem"};

  margin-bottom: 3.6rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  ${applyMediaQuery("desktop")} {
    justify-content: end;
  }
`;

const RedirectRequestPage = styled.a`
  ${applyMediaQuery("desktop")} {
    border: 0;
    font-size: 1.4rem;
    font-family: "Pretendard-Regular";
    color: ${colors.gray6};
    margin-bottom: 4.3rem;
    cursor: pointer;
    & > svg {
      margin-left: 1rem;
    }
  }
`;

export { CategoryAndSkillWrapper, LinkWrapper, RedirectRequestPage, StyledRoot, Title };
