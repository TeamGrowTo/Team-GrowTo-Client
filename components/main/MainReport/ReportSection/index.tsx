import { Count, Data, Icon, StyledRoot, Title, TitleWrapper, Unit } from "./style";
//props의 타입 정의
interface IProps {
  reportInfo: {
    reportIcon: object;
    reportTitle: string;
    reportCount: number;
    reportUnit: string;
  };
}

export default function ReportSection({ reportInfo }: IProps) {
  const { reportIcon, reportTitle, reportCount, reportUnit } = reportInfo;

  console.log({ reportIcon });

  return (
    <StyledRoot>
      <Icon src={reportIcon} />
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
