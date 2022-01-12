import styled from "styled-components";
import { colors } from "styles/color";
import { ReportLine } from "public/assets/icons";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 58rem;
  background-color: ${colors.mainBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 98rem;
  height: 40rem;
  background-color: ${colors.gray1};

  /*블러처리 어떻게 해*/
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`;

const Line = styled(ReportLine)`
  margin-top: 1.4rem;
`;

export { StyledRoot, Wrapper, Line };
