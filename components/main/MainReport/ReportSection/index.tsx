import { Count, Data, StyledRoot, Title, TitleWrapper, Unit } from "./style";
//props의 타입 정의
interface IProps {
  reportInfo: {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    count: number;
    unit: string;
  };
}

export default function ReportSection({ reportInfo }: IProps) {
  const { Icon, title, count, unit } = reportInfo;

  return (
    <StyledRoot>
      <Icon />
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <Data>
        <Count>{count}</Count>
        <Unit>{unit}</Unit>
      </Data>
    </StyledRoot>
  );
}
