import { getLectureCategoryData, getLectureSkillData } from "apis/info.api";
import SEO from "components/common/SEO";
import CategoryList from "components/process/CategoryList";
import SkillList from "components/process/SkillList";
import Title from "components/process/Title";
import { UseSorting } from "hooks/UseCategorySorting";
import Image from "next/image";
import Link from "next/link";
import {
  NextArrowAble,
  NextArrowDisabled,
  ProcessDataIcon,
  ProcessDesignIcon,
  ProcessDevelopIcon,
  ProcessEtcIcon,
  ProcessMarketingIcon,
  ProcessPlanIcon,
  ProcessPlayIcon,
  ProcessSquareIcon,
} from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureCategoryState,
  lectureDataList,
  lectureSkillState,
  processState,
} from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
import Screen from "styles/Screen";
const iconList: StaticImageData[] = [
  ProcessDevelopIcon,
  ProcessPlanIcon,
  ProcessDesignIcon,
  ProcessMarketingIcon,
  ProcessDataIcon,
  ProcessEtcIcon,
];

function Process() {
  const [skillList, setSkillList] = useRecoilState(lectureSkillState);
  const [categoryList, setCategoryList] = useRecoilState(lectureCategoryState);
  const [category, setCurrentCategory] = useRecoilState(currentCategoryState);
  const [currentSkill, setCurrentSkill] = useRecoilState(currentSkillState);
  const resetProcessData = useSetRecoilState(processState);
  const [isClicked, setIsClicked] = useState(false);

  const resetLectureListData = useResetRecoilState(lectureDataList);
  const resetCurrentSorting = useResetRecoilState(currentSortingState);
  const resetIsDisable = useResetRecoilState(isDisableState);
  const resetIsOpen = useResetRecoilState(isOpenState);
  const resetIsSelected = useResetRecoilState(isSelectedState);
  const resetSkillData = useResetRecoilState(currentSkillState);
  const resetLectureSkill = useResetRecoilState(lectureSkillState);

  const setLectureCategory = async () => {
    const result = await getLectureCategoryData();

    const { filterCategory } = UseSorting();
    const categoryViewArr = ["??????", "??????", "?????????", "?????????", "?????????", "??????"];
    const filteredCategoryList = filterCategory(result, categoryViewArr);

    setCategoryList(filteredCategoryList);
  };

  const findSelectedSkill = (currentSelectedSkillId: number) => {
    return skillList?.filter((skill) => skill.id === currentSelectedSkillId)[0] || null;
  };
  const handleSkillClick = async (skillId: number | null) => {
    if (skillId) {
      //click??? skill??? Id??? skillList??? skill?????? id??? ?????? ?????? result??? ?????????.
      const result = findSelectedSkill(skillId);
      const categoryId = category?.id; //?????? ???????????? ?????? category??? id.

      if (categoryId) {
        setCurrentSkill(result);
        resetProcessData({
          category: "",
          skill: "",
          tags: [""],
          timeAsc: undefined,
          priceAsc: undefined,
        });
      }
    }
  };

  const findSelectedCategory = (currentSelectedCategoryId: number) => {
    return categoryList?.filter((category) => category.id === currentSelectedCategoryId)[0] || null;
  };
  const setLectureSkill = async (id: number): Promise<void> => {
    const result = await getLectureSkillData(id);

    setSkillList(result);
  };
  const resetData = () => {
    resetSkillData();
    resetLectureListData();
    resetIsDisable();
    resetIsOpen();
    resetCurrentSorting();
    resetIsSelected();
  };
  const handleCategoryClick = (categoryId: number | null) => {
    if (categoryId) {
      setIsClicked(true);
      const result = findSelectedCategory(categoryId);

      setCurrentCategory(result);
      setLectureSkill(categoryId);
      setCurrentSkill({ id: -1, skillName: "" });
      resetData();
    }
  };

  useEffect(() => {
    setLectureCategory();
    if (!category) setCurrentCategory({ id: -1, categoryName: "" });
    if (!currentSkill) setCurrentSkill({ id: -1, skillName: "" });
    if (category?.id && category?.id !== -1) setLectureSkill(category.id);
    resetLectureSkill();
  }, []);

  return (
    <>
      <SEO title="????????? - ????????? ?????? ?????? ?????? " content="???????????? ?????? IT????????? ?????? ????????????" />
      <StyledRoot>
        <Screen desktop>
          <>
            <div></div>
            <PlayIcon>
              <Image src={ProcessPlayIcon} alt="processPlay" />
            </PlayIcon>
            <SquareIcon>
              <Image src={ProcessSquareIcon} alt="processSqaure" />
            </SquareIcon>
          </>
        </Screen>
        <ProcessBox>
          <Title></Title>
          <CardChoice>
            <CategoryWrapper>
              <p>
                <span>?????? ??????</span>??? ???????????????
              </p>
              <CategoryList
                iconList={iconList}
                onCategoryClick={handleCategoryClick}
                isClicked={isClicked}
              />
            </CategoryWrapper>
            <SkillWrapper isClicked={isClicked}>
              <p>
                <span>?????? ?????? ??????</span>??? ???????????????
              </p>
              <SkillList onSkillClick={handleSkillClick} />
            </SkillWrapper>
          </CardChoice>
          <NextButtonWrapper>
            <Link href="/processTag" replace passHref>
              <NextButton
                isAllClicked={
                  category?.id !== -1 && (currentSkill?.id === -1 || currentSkill !== null)
                }
                disabled={
                  category?.id !== -1 && (currentSkill?.id === -1 || currentSkill !== null)
                    ? false
                    : true
                }
              >
                ??????
              </NextButton>
            </Link>
            <NextArrowWrapper>
              {category?.id !== -1 && (currentSkill?.id === -1 || currentSkill !== null) ? (
                <NextArrowDisabled />
              ) : (
                <NextArrowAble />
              )}
            </NextArrowWrapper>
          </NextButtonWrapper>
        </ProcessBox>
      </StyledRoot>
    </>
  );
}

export default Process;
export const StyledRoot = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 85rem;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  top: 6.45rem;
  right: 0;
`;

export const SquareIcon = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 11.1rem;
`;

export const ProcessBox = styled.div`
  position: relative;
  width: 102rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;

export const CardChoice = styled.section`
  width: 102rem;
  height: 66rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2.8rem;
  backdrop-filter: blur(2rem);
  border: 2px solid white;
  margin-top: 4rem;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
    border-radius: 0;
    margin-top: 0;
    border-radius: 2.8rem 2.8rem 0 0;
  }
`;

export const CategoryWrapper = styled.section`
  width: 90rem;
  margin: 6rem auto 0 6.4rem;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 2.4rem;
    color: ${colors.subBlack};
    margin-bottom: 2rem;
  }
  & > p > span {
    color: ${colors.subOrange};
  }
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    margin: 2.4rem auto 0;
    line-height: 2.8rem;
    & > p {
      font-size: 2rem;
      margin-bottom: 1.2rem;
      margin-left: 1.6rem;
    }
  }
`;

export const SkillWrapper = styled.div<{ isClicked: boolean }>`
  width: 89.2rem;
  margin: 6rem auto 0 6.4rem;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 2.4rem;
    color: ${({ isClicked }) => (isClicked ? `${colors.subBlack}` : `${colors.gray4}`)};
    margin-bottom: 2rem;
  }
  & > p > span {
    color: ${({ isClicked }) => (isClicked ? `${colors.subOrange}` : `${colors.gray4}`)};
  }
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    margin: 2.8rem auto 5rem;
    line-height: 2.8rem;
    & > p {
      font-size: 2rem;
      margin-left: 1.6rem;
    }
  }
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const NextButton = styled.button<{ isAllClicked: boolean }>`
  margin-left: auto;
  margin-top: 2.4rem;
  margin-bottom: 5.8rem;
  width: 22.4rem;
  height: 6rem;
  background: ${({ isAllClicked }) => (isAllClicked ? `${colors.mainBlue}` : `${colors.gray2}`)};
  font-size: 2.4rem;
  font-family: "Pretendard-Bold";
  border-radius: 4.8rem;
  padding-right: 1.7rem;
  color: ${({ isAllClicked }) => (isAllClicked ? "white" : `${colors.gray4}`)};
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    margin-top: 4rem;
    width: 9.8rem;
    height: 5.2rem;
    font-size: 1.6rem;
    margin-right: 2.4rem;
  }
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;

export const NextArrowWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 6.5rem;
  margin-right: 0.9rem;
  ${applyMediaQuery("mobile")} {
    top: 5.9rem;
    right: 1rem;
    margin-right: 3.5rem;
  }
`;
