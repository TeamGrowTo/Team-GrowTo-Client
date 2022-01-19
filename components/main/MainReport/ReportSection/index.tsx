import { Count, Data, StyledRoot, Title, TitleWrapper, Unit } from "./style";
//props의 타입 정의
interface IProps {
  reportInfo: {
    UniqueIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    count: number;
    unit: string;
  };
}

export default function ReportSection({ reportInfo }: IProps) {
  const { UniqueIcon, title, count, unit } = reportInfo;

  return (
    <StyledRoot>
      <UniqueIcon />
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
