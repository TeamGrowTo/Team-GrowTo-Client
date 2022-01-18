import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const Tag = styled.div`
  padding: 0.9rem 2rem;
  background-color: ${colors.gray0};
  color: ${colors.gray6};
  font-size: 1.8rem;
  font-family: "Pretendard-Bold";
  border-radius: 3.5rem;
`;

export { StyledRoot, Tag };
