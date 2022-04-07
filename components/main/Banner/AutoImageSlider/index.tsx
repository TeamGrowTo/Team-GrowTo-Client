import { useEffect, useState } from "react";

import { SliderBox, SliderWrapper } from "./style";

interface Props {
  children?: JSX.Element[];
  //prop으로 여러 태그 넣으면 children은 배열이 된다.
  moveWidth: string;
}

function AutoImageSlider({ children, moveWidth }: Props) {
  let childrenArr: JSX.Element[];
  let intervalId: NodeJS.Timer;
  const [sliderPage, setSliderPage] = useState(1);

  const onChangeSliderPage = (page: number) => {
    setSliderPage(page);
  };

  useEffect(() => {
    if (children) {
      childrenArr = [children[0], ...children, children[children.length - 1]];
      autoMoveSlide();
    }
  }, [children]);

  const autoMoveSlide = () => {
    intervalId = setInterval(() => {
      onChangeSliderPage(sliderPage + 1);
    }, 2000);
  };
  const endToEnd = (num: number) => {
    document.body.style.transition = "0";
    onChangeSliderPage(num);
  };

  const moveRight = () => {
    onChangeSliderPage(sliderPage + 1);
    if (sliderPage + 1 === childrenArr.length - 1) setTimeout(() => endToEnd(0), 300);
    clearInterval(intervalId);
  };

  const moveLeft = () => {
    onChangeSliderPage(sliderPage - 1);
    if (sliderPage - 1 === 0) setTimeout(() => endToEnd(childrenArr.length - 2), 300);
  };

  return (
    <SliderBox>
      <SliderWrapper page={sliderPage} moveWidth={Number(moveWidth)}>
        {children?.map((elem, index) => (
          <div key={index}>{elem}</div>
        ))}
      </SliderWrapper>
      <button onClick={moveLeft}></button>
      <button onClick={moveRight}></button>
    </SliderBox>
  );
}

export default AutoImageSlider;
