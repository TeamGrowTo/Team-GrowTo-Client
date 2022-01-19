import Result from "components/category/Result";
import BlueButton from "components/common/BlueButton";
import ProcessResult from "components/result/ProcessResult";
import { useRouter } from "next/router";
import { getLectureResultData } from "pages/apis/lectures.api";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { lectureResultState } from "store/state";
import { LecturesResultAllData } from "types/lectures.type";

import { StyledRoot } from "./style";

type Result = LecturesResultAllData | null;

const Category = () => {
  const router = useRouter();

  const setLectureResultList = useSetRecoilState(lectureResultState);
  const [listLength, setListLength] = useState(0);

  const getLectureResult = async (): Promise<void> => {
    const id = router.query.id || "";
    const data: Result = await getLectureResultData(id);
    // data에는 categoryId, skillId가 들어있답니다. LecturesResultAllData type 을 참고해보세요.

    if (data) {
      setLectureResultList(data.result);
      setListLength(data.result.length);
    }
  };

  useEffect(() => {
    getLectureResult();
  }, []);

  //categoryId, skillId로 api보내서 받은 response를 cardList 컴포넌트에 넣어주자
  const handleMoveToCategory = () => {
    router.push("/category");
  };

  return (
    <StyledRoot>
      <ProcessResult listLength={listLength} />
      <Result />
      <BlueButton onClick={handleMoveToCategory} width="96%" maxWidth="84.5rem">
        다른 강의 비교하기
      </BlueButton>
    </StyledRoot>
  );
};

export default Category;
