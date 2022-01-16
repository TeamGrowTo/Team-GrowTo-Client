import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import Image from "next/image";
import Router from "next/router";
import { postProcessResult } from "pages/apis/lectures";
import { ProcessPlayIcon, ProcessSquareIcon } from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { processState } from "store/state";

import {
  CardChoice,
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
  const priceTypeList = ["높은 가격", "짧은 가격", "상관없음"];
  const getTimeData = useRecoilValue(processState);

  useEffect(() => {
    if (
      getTimeData.priceAsc === true ||
      getTimeData.priceAsc === false ||
      getTimeData.priceAsc === null
    ) {
      console.log(getTimeData.priceAsc);
      const changeType =
        getTimeData.priceAsc === false
          ? "높은 가격"
          : getTimeData.priceAsc === true
          ? "짧은 가격"
          : "상관없음";

      setSelectedPrice(changeType);
    }
  }, []);
  const handlePriceClick = (timeType: string) => {
    setSelectedPrice(timeType);
  };

  const handleResult = async () => {
    const changeType =
      selectedPrice === "높은 가격" ? false : selectedPrice === "짧은 가격" ? true : null;
    const tempProcessData = { ...processData };

    tempProcessData["priceAsc"] = changeType;
    setProcessData(tempProcessData);

    //await postProcessResult(processData);
    Router.push("/");
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
          <NextButton onClick={handleResult}>완료하기 &gt;</NextButton>
        </NextButtonWrapper>
      </ProcessBox>
    </StyledRoot>
  );
}

export default ProcessPrice;
