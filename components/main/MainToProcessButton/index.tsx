import Image from "next/image";
import Link from "next/link";
import { MainToProcessButtonIcon } from "public/assets/icons";
import { useResetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureDataList,
} from "store/state";

import { ButtonWrapper, Description, StyledRoot, ToProcessButton } from "./style";

function MainToProcessButton() {
  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetCurrentCategoryData = useResetRecoilState(currentCategoryState);
  const resetCurrentSkillData = useResetRecoilState(currentSkillState);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetIsSelected = useResetRecoilState(isSelectedState);

  const resetData = () => {
    resetLectureListData();
    resetCurrentCategoryData();
    resetCurrentSkillData();
    resetCurrentSorting();
    resetIsDisable();
    resetIsOpen();
    resetIsSelected();
  };

  const handleMainToProcessButton = () => {
    resetCurrentSkillData();
    resetData();
  };

  return (
    <StyledRoot>
      <ButtonWrapper>
        <Description>
          <h3>맞춤 강의 찾기</h3>
          <p>
            <strong>*5초</strong> 면 나에게 맞는 강의를 찾을 수 있어요
          </p>
        </Description>
        <Link href="/processMain" passHref>
          <ToProcessButton onClick={handleMainToProcessButton}>
            지금 시작하기
            <span>
              <Image src={MainToProcessButtonIcon} alt="toProcessIcon" />
            </span>
          </ToProcessButton>
        </Link>
      </ButtonWrapper>
    </StyledRoot>
  );
}

export default MainToProcessButton;
