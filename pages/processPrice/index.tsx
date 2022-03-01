import { postProcessResult } from "apis/lectures.api";
import SEO from "components/common/SEO";
import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  NextArrowAble,
  NextArrowDisabled,
  ProcessLoading,
  ProcessLoadingMobile,
  ProcessPlayIcon,
  ProcessSquareIcon,
} from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { processState } from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
import Screen from "styles/Screen";

function ProcessPrice() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [processData, setProcessData] = useRecoilState(processState);
  const priceTypeList = ["높은 가격", "낮은 가격", "상관없음"];
  const getTimeData = useRecoilValue(processState);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    const resultData = await postProcessResult(processData);

    setIsLoading(true);
    setProcessData({
      category: "",
      skill: "",
      tags: [""],
      timeAsc: undefined,
      priceAsc: undefined,
    });
    setTimeout(() => {
      router.replace(`/result/${resultData.id}`);
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

  return (
    <>
      <SEO title="그로투 - 나에게 맞는 강의 찾기 " content="당신에게 맞는 IT강의를 찾는 중이에요" />
      {isLoading ? (
        <LoadingStyledRoot>
          <LogoWrapper>
            <Screen desktop>
              <LoadingLogo />
            </Screen>
            <Screen mobile>
              <LoadingLogoMobile />
            </Screen>

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
      )}
    </>
  );
}

export default ProcessPrice;
export const StyledRoot = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
  ${applyMediaQuery("mobile")} {
    height: 80rem;
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

export const TimeWrapper = styled.div`
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
    margin: 3.2rem auto 5rem;
    & > p {
      font-size: 2rem;
    }
  }
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const NextButton = styled.button<{ selectedPrice: string }>`
  margin-left: auto;
  margin-top: 2.4rem;
  margin-bottom: 5.8rem;
  width: 22.4rem;
  height: 6rem;
  background: ${({ selectedPrice }) =>
    selectedPrice.length > 0 ? `${colors.mainBlue}` : `${colors.gray2}`};
  font-size: 2.4rem;
  font-family: "Pretendard-Bold";
  border-radius: 4.8rem;
  padding-right: 1.7rem;
  color: ${({ selectedPrice }) => (selectedPrice.length > 0 ? "white" : `${colors.gray4}`)};
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    font-size: 1.6rem;
    margin-top: 4rem;
    width: 12.6rem;
    height: 5.2rem;
  }
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;

export const NextArrowWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 4.2rem;
  margin-right: 1.1rem;
  ${applyMediaQuery("mobile")} {
    top: 5.9rem;
    right: 1rem;
  }
`;

export const LoadingStyledRoot = styled.main`
  width: 100%;
  background: linear-gradient(to bottom, ${colors.mainBlue}, ${colors.subPink});
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;
export const LogoWrapper = styled.div`
  width: 42.5rem;
  height: 96.4rem;
  margin: 0 auto;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 4rem;
    color: white;
    line-height: 5.4rem;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("mobile")} {
    width: 17rem;
    & > p {
      font-size: 2rem;
    }
  }
`;
export const LoadingLogo = styled(ProcessLoading)`
  margin: 27.5rem auto 4.4rem;
`;

export const LoadingLogoMobile = styled(ProcessLoadingMobile)`
  margin: 23.6rem auto 2.4rem;
`;
