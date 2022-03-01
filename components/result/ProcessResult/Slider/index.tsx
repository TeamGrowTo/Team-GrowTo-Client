import {
  MobileResultSliderLeftArrowIcon,
  MobileResultSliderRightArrowIcon,
} from "public/assets/icons";
import { useRecoilValue } from "recoil";
import { lectureResultState } from "store/state";

import ResultCard from "../ResultCard";
import { SliderBox, SliderIconWrapper, SliderWrapper, StyledRoot } from "./style";

interface Props {
  listLength: number | 0;
  onChangeSliderPage: (page: number) => void;
  sliderPage: number | 0;
}

function Slider({ listLength, onChangeSliderPage, sliderPage }: Props) {
  const lectureResultList = useRecoilValue(lectureResultState);
  const moveRight = () => {
    if (sliderPage < listLength - 1) onChangeSliderPage(sliderPage + 1);
  };

  const moveLeft = () => {
    if (sliderPage > 0) onChangeSliderPage(sliderPage - 1);
  };

  return (
    <StyledRoot>
      <SliderIconWrapper onClick={moveLeft}>
        <MobileResultSliderLeftArrowIcon />
      </SliderIconWrapper>
      <SliderBox>
        <SliderWrapper page={sliderPage}>
          {lectureResultList?.map((data, index) => (
            <ResultCard key={index} result={data} />
          ))}
        </SliderWrapper>
      </SliderBox>
      <SliderIconWrapper onClick={moveRight}>
        <MobileResultSliderRightArrowIcon />
      </SliderIconWrapper>
    </StyledRoot>
  );
}

export default Slider;
