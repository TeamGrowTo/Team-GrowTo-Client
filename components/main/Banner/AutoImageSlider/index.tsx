import { useEffect, useState } from "react";

import { LeftMoveButton, RightMoveButton, SliderBox, SliderWrapper } from "./style";

interface Props {
  children?: JSX.Element[];
  //prop으로 여러 태그 넣으면 children은 배열이 된다.
  moveWidth: string;
}

function AutoImageSlider({ children, moveWidth }: Props) {
  // let childrenArr: JSX.Element[] = useState();
  let intervalId: NodeJS.Timer;
  const [sliderPage, setSliderPage] = useState(1);

  const onChangeSliderPage = (page: number) => {
    setSliderPage(page);
  };

  useEffect(() => {
    if (children) {
      // childrenArr = [children[0], ...children, children[children.length - 1]];
      autoMoveSlide();
      // console.log(childrenArr);
    }
  }, []);

  const checkEndPage = (now: number) => {
    if (children) {
      const len = children.length || 0;

      if (now === len - 1) setTimeout(() => endToEnd(0), 300);
      else if (now === 0) setTimeout(() => endToEnd(len - 2), 300);
    }
  };

  const intervalCallBack = () => {
    onChangeSliderPage(sliderPage + 1);

    console.log("hi");
    checkEndPage(sliderPage + 1);
    intervalId = setTimeout(intervalCallBack, 4000);
  };

  const autoMoveSlide = () => {
    intervalId = setTimeout(intervalCallBack, 4000);
  };

  const endToEnd = (num: number) => {
    document.body.style.transition = "0";
    onChangeSliderPage(num);
  };

  const moveRight = () => {
    onChangeSliderPage(sliderPage + 1);
    clearTimeout(intervalId);
    checkEndPage(sliderPage + 1);
  };

  const moveLeft = () => {
    onChangeSliderPage(sliderPage - 1);
    clearTimeout(intervalId);
    checkEndPage(sliderPage - 1);
  };

  return (
    <SliderBox>
      <SliderWrapper page={sliderPage} moveWidth={Number(moveWidth)}>
        {children ? children[sliderPage] : <></>}
      </SliderWrapper>
      <LeftMoveButton onClick={moveLeft}></LeftMoveButton>
      <RightMoveButton onClick={moveRight}></RightMoveButton>
    </SliderBox>
  );
}

export default AutoImageSlider;
