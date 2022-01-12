import { StyledRoot, Icon, TitleWrapper, Title, Data, Count, Unit } from "./style";
//props의 타입 정의
interface IProps {
  reportInfo: { reportIcon: string; reportTitle: string; reportCount: number; reportUnit: string };
}

export default function ReportSection({ reportInfo }: IProps) {
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
