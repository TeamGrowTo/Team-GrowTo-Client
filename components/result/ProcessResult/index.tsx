import Image from "next/image";
import { ComparisonImg } from "public/assets/images";
import { useRecoilValue } from "recoil";
import { lectureDataList, lectureResultState } from "store/state";

import ResultCard from "./ResultCard";
import {
  ComparisonImgWrapper,
  Description,
  LectureCount,
  LectureSkillData,
  ResultCardWrapper,
  ResultData,
  StyledRoot,
  Title,
} from "./style";

interface Props {
  listLength: number;
  categoryName: string;
  skillName: string;
}

function ProcessResult({ listLength, categoryName, skillName }: Props) {
  const lectureResultList = useRecoilValue(lectureResultState);
  const LectureDataList = useRecoilValue(lectureDataList);

  return (
    <StyledRoot>
      <ComparisonImgWrapper>
        <Image src={ComparisonImg} alt="comparison" width="428" height="497" />
      </ComparisonImgWrapper>
      <Title>그로투 강의 비교</Title>
      <Description>
        <LectureCount>총 {LectureDataList?.length}개</LectureCount>의{" "}
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
}

export default ProcessResult;
