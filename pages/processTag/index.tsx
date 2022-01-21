import { getSkillTagList } from "apis/info.api";
import CardTitle from "components/process/CardTitle";
import TagButton from "components/process/TagButton";
import Title from "components/process/Title";
import Image from "next/image";
import Link from "next/link";
import {
  NextArrowAble,
  NextArrowDisabled,
  ProcessPlayIcon,
  ProcessSquareIcon,
} from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState, processState } from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
import Screen from "styles/Screen";
import { SkillTagList } from "types/info.type";
function ProcessTag() {
  const [tagList, setTagList] = useState<SkillTagList[] | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [processData, setProcessData] = useRecoilState(processState);
  const getTagData = useRecoilValue(processState);
  const skillState = useRecoilValue(currentSkillState);
  const categoryState = useRecoilValue(currentCategoryState);
  const getTagList = async () => {
    if (skillState?.id) {
      const data = await getSkillTagList(skillState?.id);

      data && setTagList(data);
      setTagList(data);
    }
  };

  useEffect(() => {
    getTagList();
    const tempProcessData = { ...processData };

    if (skillState?.skillName) {
      tempProcessData["skill"] = skillState?.skillName;
    }
    if (categoryState?.categoryName) {
      tempProcessData["category"] = categoryState?.categoryName;
    }
    setProcessData(tempProcessData);

    if (getTagData.tags.length !== 1) {
      setSelectedTags(getTagData.tags);
    }
  }, []);

  const handleTagClick = (tag: string) => {
    if (selectedTags.length === 0) {
      setSelectedTags([tag]);
    }
    if (selectedTags.length < 2) {
      if (!selectedTags.includes(tag)) {
        setSelectedTags([...selectedTags, tag]);
      } else {
        setSelectedTags(selectedTags.filter((v) => v !== tag));
      }
    } else {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((v) => v !== tag));
      }
    }
  };

  const handleNext = () => {
    const tempProcessData = { ...processData };

    tempProcessData["tags"] = selectedTags;
    setProcessData(tempProcessData);
  };

  return (
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
        <CardTitle></CardTitle>
        <CardChoice>
          <TagWrapper>
            <p>
              원하는 <span>강의 특성 2가지</span>를 선택하세요.
            </p>
            {tagList?.map((tag) => (
              <TagButton
                key={tag.id}
                tag={tag.name}
                onTagClick={handleTagClick}
                selectedTags={selectedTags}
              ></TagButton>
            ))}
          </TagWrapper>
        </CardChoice>
        <Link href="/processTime" replace passHref>
          <NextButtonWrapper>
            <NextButton
              onClick={handleNext}
              selectedTags={selectedTags}
              disabled={selectedTags.length > 1 ? false : true}
            >
              다음
            </NextButton>
            <NextArrowWrapper>
              {selectedTags.length > 1 ? <NextArrowDisabled /> : <NextArrowAble />}
            </NextArrowWrapper>
          </NextButtonWrapper>
        </Link>
      </ProcessBox>
    </StyledRoot>
  );
}

export default ProcessTag;
const mockData = [
  {
    id: 1,
    name: "실습프로젝트",
  },
  {
    id: 2,
    name: "광고집행툴",
  },
  {
    id: 3,
    name: "앱마케팅",
  },
  {
    id: 4,
    name: "GAIQ 자격증",
  },
  {
    id: 5,
    name: "웹마케팅",
  },
  {
    id: 6,
    name: "데이터수집*분석",
  },
  {
    id: 7,
    name: "디지털마케팅 이론",
  },
  {
    id: 8,
    name: "데이터수집*분석툴",
  },
  {
    id: 9,
    name: "SQL 자격증",
  },
  {
    id: 10,
    name: "실전프로젝트",
  },
  {
    id: 11,
    name: "집행툴",
  },
  {
    id: 12,
    name: "어플리케이션 마케팅",
  },
  {
    id: 13,
    name: "아무거나",
  },
  {
    id: 14,
    name: "왜앱마케팅",
  },
  {
    id: 15,
    name: "서버 분석툴",
  },
  {
    id: 16,
    name: "히히 자격증",
  },
  {
    id: 17,
    name: "꾸  프로젝트",
  },
  {
    id: 18,
    name: "마케팅 집행툴",
  },
  {
    id: 19,
    name: "iOS마케팅",
  },
  {
    id: 20,
    name: "정보처리기사 자격증",
  },
  {
    id: 21,
    name: "웹이 짱이야 마케팅",
  },
];

export const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
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
    width: 36rem;
  }
`;

export const CardChoice = styled.section`
  width: 102rem;
  height: 49.3rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0 0 2.8rem 2.8rem;
  backdrop-filter: blur(2rem);
  border: 2px solid white;
  ${applyMediaQuery("mobile")} {
    width: 36rem;
    height: 100%;
  }
`;

export const TagWrapper = styled.div`
  width: 77.4rem;
  margin: 6.5rem auto 0;
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
    margin: 3.2rem auto 0;
    & > p {
      font-size: 2rem;
    }
  }
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const NextButton = styled.button<{ selectedTags: string[] }>`
  margin-left: auto;
  margin-top: 2.4rem;
  margin-bottom: 5.8rem;
  width: 22.4rem;
  height: 6rem;
  background: ${({ selectedTags }) =>
    selectedTags.length > 1 ? `${colors.mainBlue}` : `${colors.gray2}`};
  font-size: 2.4rem;
  font-family: "Pretendard-Bold";
  border-radius: 4.8rem;
  color: ${({ selectedTags }) => (selectedTags.length > 1 ? "white" : `${colors.gray4}`)};
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    margin-top: 4rem;
    width: 9.8rem;
    height: 5.2rem;
  }
`;

export const NextArrowWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 6.5rem;
  ${applyMediaQuery("mobile")} {
    top: 5.7rem;
    right: 1rem;
  }
`;
