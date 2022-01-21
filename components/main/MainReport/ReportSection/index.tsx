import Image from "next/image";
import Screen from "styles/Screen";

import { Count, Data, StyledRoot, Title, TitleWrapper, Unit } from "./style";
//props의 타입 정의
interface IProps {
  reportInfo: {
    Icon: string;
    mobileIcon: string;
    title: string;
    count: number;
    unit: string;
  };
}

export default function ReportSection({ reportInfo }: IProps) {
  const { Icon, mobileIcon, title, count, unit } = reportInfo;

  return (
    <StyledRoot>
      <Screen desktop>
        <Image src={Icon} alt="아이콘" />
      </Screen>
      <Screen mobile>
        <Image src={mobileIcon} alt="" />
      </Screen>
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
