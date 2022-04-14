import Image from "next/image";
import Link from "next/link";
import { MainToProcessButtonIcon } from "public/assets/icons";
import { useResetRecoilState } from "recoil";
import { currentCategoryState } from "store/state";

import { ButtonWrapper, Description, StyledRoot, ToProcessButton } from "./style";

interface Props {
  resetData: () => void;
}

function MainToProcessButton({ resetData }: Props) {
  const resetCurrentSkillData = useResetRecoilState(currentCategoryState);

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
