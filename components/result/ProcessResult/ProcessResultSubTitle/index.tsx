import { useRecoilValue } from "recoil";
import { lectureDataList } from "store/state";

import { Description, LectureCount, LectureSkillData, ResultData } from "./style";

interface Props {
  listLength: number;
  categoryName: string;
  skillName: string;
}

function ProcessResultSubTitle({ listLength, categoryName, skillName }: Props) {
  const LectureDataList = useRecoilValue(lectureDataList);

  return (
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
  );
}

export default ProcessResultSubTitle;
