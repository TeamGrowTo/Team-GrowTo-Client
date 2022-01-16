import CardTitle from "components/process/CardTitle";
import TagButton from "components/process/TagButton";
import Title from "components/process/Title";
import Image from "next/image";
import Router from "next/router";
import { getSkillTagList } from "pages/apis/info.api";
import { ProcessPlayIcon, ProcessSquareIcon } from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { processState } from "store/state";
import { SkillTagList } from "types/info.type";

import {
  CardChoice,
  NextButton,
  NextButtonWrapper,
  PlayIcon,
  ProcessBox,
  SquareIcon,
  StyledRoot,
  TagWrapper,
} from "./style";

function ProcessTag() {
  const [tagList, setTagList] = useState<SkillTagList[] | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [processData, setProcessData] = useRecoilState(processState);
  const getTagData = useRecoilValue(processState);

  const id = 1;
  const getTagList = async () => {
    const data = await getSkillTagList(id);

    setTagList(data);
  };

  useEffect(() => {
    //getTagList();
    setTagList(mockData);
    if (getTagData.tags) {
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
    Router.push("/processTime");
  };

  return (
    <StyledRoot>
      <PlayIcon>
        <Image src={ProcessPlayIcon} alt="processPlay" />
      </PlayIcon>
      <SquareIcon>
        <Image src={ProcessSquareIcon} alt="processSqaure" />
      </SquareIcon>
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
        <NextButtonWrapper>
          <NextButton onClick={handleNext}>다음 &gt;</NextButton>
        </NextButtonWrapper>
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
