import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.section`
  display: flex;
  align-content: start;
  flex-wrap: wrap;
  height: 13.2rem;
  overflow: hidden;
  margin-bottom: 2.4rem;
  & > * {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
  & > *:last-child {
    margin-right: 0;
  }

  ${applyMediaQuery("mobile")} {
    //result card 사이즈 유지를 위한 width
    width: 24.8rem;
    height: 10rem;
  }
`;

export const Tag = styled.article<{ tagType: string }>`
  height: 4rem;
  padding: 0.9rem 2rem;
  background-color: ${({ tagType }) => colors[tagType]};
  color: ${colors.gray6};
  font-size: 1.8rem;
  font-family: "Pretendard-Bold";
  border-radius: 3.5rem;
  display: flex;
  align-items: center;

  ${applyMediaQuery("mobile")} {
    height: 2.8rem;
    font-size: 1.4rem;
    padding: 0.5rem 1.8rem 0.6rem;
  }
`;
