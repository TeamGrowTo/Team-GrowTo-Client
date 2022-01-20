import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import Image from "next/image";
import Router from "next/router";
import { postProcessResult } from "pages/apis/lectures.api";
import {
  NextArrowAble,
  NextArrowDisabled,
  ProcessPlayIcon,
  ProcessSquareIcon,
} from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentCategoryState, currentSkillState, processState } from "store/state";
import Screen from "styles/Screen";

import {
  CardChoice,
  LoadingLogo,
  LoadingStyledRoot,
  LogoWrapper,
  NextArrowWrapper,
  NextButton,
  NextButtonWrapper,
  PlayIcon,
  ProcessBox,
  SquareIcon,
  StyledRoot,
  TimeWrapper,
} from "./style";
function ProcessPrice() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [processData, setProcessData] = useRecoilState(processState);
  const priceTypeList = ["높은 가격", "낮은 가격", "상관없음"];
  const getTimeData = useRecoilValue(processState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      getTimeData.priceAsc === true ||
      getTimeData.priceAsc === false ||
      getTimeData.priceAsc === null
    ) {
      const changeType =
        getTimeData.priceAsc === false
          ? "높은 가격"
          : getTimeData.priceAsc === true
          ? "낮은 가격"
          : "상관없음";

      setSelectedPrice(changeType);
    }
  }, []);
  const handlePriceClick = (timeType: string) => {
    setSelectedPrice(timeType);
  };

  const handleResult = async () => {
    console.log(processData);
    const resultData = await postProcessResult(processData);

    setIsLoading(true);
    setTimeout(() => {
      Router.push(`/result/${resultData.id}`);
    }, 3000);
  };

  useEffect(() => {
    const changeType =
      selectedPrice === "높은 가격"
        ? false
        : selectedPrice === "낮은 가격"
        ? true
        : selectedPrice === "상관없음"
        ? null
        : undefined;

    const tempProcessData = { ...processData };

    tempProcessData["priceAsc"] = changeType;
    setProcessData(tempProcessData);
  }, [selectedPrice]);

  return isLoading ? (
    <LoadingStyledRoot>
      <LogoWrapper>
        <LoadingLogo />
        <p>
          당신을 위한 <br />
          맞춤 강의를 찾는 중...
        </p>
      </LogoWrapper>
    </LoadingStyledRoot>
  ) : (
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
          <TimeWrapper>
            <p>
              강의 <span>가격대</span>는 어떤 타입을 선호하시나요?
            </p>
            {priceTypeList.map((priceType, index) => (
              <TypeButton
                key={index}
                onTypeClick={handlePriceClick}
                interestType={priceType}
                selectedTime={selectedPrice}
              />
            ))}
          </TimeWrapper>
        </CardChoice>
        <NextButtonWrapper>
          <NextButton
            onClick={handleResult}
            selectedPrice={selectedPrice}
            disabled={selectedPrice.length > 0 ? false : true}
          >
            완료하기
          </NextButton>
          <NextArrowWrapper>
            {selectedPrice.length > 0 ? <NextArrowDisabled /> : <NextArrowAble />}
          </NextArrowWrapper>
        </NextButtonWrapper>
      </ProcessBox>
    </StyledRoot>
  );
}

export default ProcessPrice;
