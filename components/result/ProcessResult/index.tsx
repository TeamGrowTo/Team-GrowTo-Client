import Image from "next/image";
import { Compass } from "public/assets/images";
import { useRecoilValue } from "recoil";
import { lectureResultState } from "store/state";

import ResultCard from "./ResultCard";
import {
  Description,
  LargeCompass,
  LectureCount,
  LectureSkillData,
  ResultCardWrapper,
  ResultData,
  SmallCompass,
  StyledRoot,
  Title,
} from "./style";

interface Props {
  listLength: number;
  categoryName: string;
  skillName: string;
}

const ProcessResult = function ({ listLength, categoryName, skillName }: Props) {
  const lectureResultList = useRecoilValue(lectureResultState);

  return (
    <StyledRoot>
      <SmallCompass>
        <Image src={Compass} alt="compass" width="369" height="257" />
      </SmallCompass>
      <LargeCompass>
        <Image src={Compass} alt="compass" width="698" height="504" />
      </LargeCompass>
      <Title>그로투 강의 비교</Title>
      <Description>
        <LectureCount>총 11개</LectureCount>의{" "}
        <LectureSkillData>
          {categoryName} {skillName} 강의 중
        </LectureSkillData>{" "}
        나에게 <ResultData>딱 맞는 {listLength}가지</ResultData> 강의에요!
      </Description>
      <ResultCardWrapper resultDataCount={lectureResultList?.length || 0}>
        {lectureResultList?.map((data, index) => (
          <ResultCard key={index} result={data} />
        ))}
      </ResultCardWrapper>
    </StyledRoot>
  );
};

export default ProcessResult;
