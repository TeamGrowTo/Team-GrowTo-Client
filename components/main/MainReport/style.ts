import { ReportLine } from "public/assets/icons";
import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 58rem;
  background-color: ${colors.skyBlue};
  background-image: url("/assets/images/mainReportBackground.png");
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 98rem;
  height: 40rem;
  background: rgb(255, 255, 255, 0.8);
  border: 0.2rem solid #ffffff;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`;

const Line = styled(ReportLine)`
  margin-top: 1.4rem;
`;

export { Line, StyledRoot, Wrapper };
