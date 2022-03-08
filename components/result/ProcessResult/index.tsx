import Image from "next/image";
import { ComparisonImg } from "public/assets/images";
import { useRecoilValue } from "recoil";
import { lectureDataList, lectureResultState } from "store/state";
import Screen from "styles/Screen";

import ResultCard from "./ResultCard";
import Slider from "./Slider";
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
  sliderPage: number;
  onChangeSliderPage: (page: number) => void;
}

function ProcessResult({
  listLength,
  categoryName,
  skillName,
  sliderPage,
  onChangeSliderPage,
}: Props) {
  const lectureResultList = useRecoilValue(lectureResultState);
  const LectureDataList = useRecoilValue(lectureDataList);

  return (
    <StyledRoot>
      <ComparisonImgWrapper>
        <Image src={ComparisonImg} alt="comparison" width="428" height="497" quality="100" />
      </ComparisonImgWrapper>
      <Title>맞춤 강의 찾기 결과</Title>
      <Description>
        <div>
          <LectureCount>총 {LectureDataList?.length}개</LectureCount>의{" "}
          <LectureSkillData>
            [{categoryName} {skillName}]
          </LectureSkillData>{" "}
          강의 중
        </div>
        <div>
          나에게 <ResultData>딱 맞는 {listLength}가지</ResultData> 강의를 가져왔어요
        </div>
      </Description>
      <Screen desktop>
        <ResultCardWrapper resultDataCount={lectureResultList?.length || 0}>
          {lectureResultList?.map((data, index) => (
            <ResultCard key={index} result={data} />
          ))}
        </ResultCardWrapper>
      </Screen>
      <Screen mobile>
        <Slider
          listLength={listLength || 0}
          onChangeSliderPage={onChangeSliderPage}
          sliderPage={sliderPage}
        />
      </Screen>
    </StyledRoot>
  );
}

export default ProcessResult;
