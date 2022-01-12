import { StyledRoot, Icon, TitleWrapper, Title, Data, Count, Unit } from "./style";

export default function ReportSection({ reportInfo }) {
  const { reportIcon, reportTitle, reportCount, reportUnit } = reportInfo;

  return (
    <StyledRoot>
      <Icon src={reportIcon} alt="" />
      <TitleWrapper>
        <Title>{reportTitle}</Title>
      </TitleWrapper>
      <Data>
        <Count>{reportCount}</Count>
        <Unit>{reportUnit}</Unit>
      </Data>
    </StyledRoot>
  );
}
