import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Slider from "react-slick";
import Screen from "styles/Screen";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import SlideIndexView from "./SlideIndexView";
import { ButtonBox, ButtonWrapper, SliderIndexWrapper, StyledRoot } from "./style";

interface Props {
  children?: JSX.Element[];
  //prop으로 여러 태그 넣으면 children은 배열이 된다.
}

function AutoImageSlider({ children }: Props) {
  let slider: Slider | null = null;
  const [page, setPage] = useState({
    slideIndex: 0,
  });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => setPage({ slideIndex: next }),
  };

  const nextMove = () => {
    slider?.slickNext();
  };

  const prevMove = () => {
    slider?.slickPrev();
  };

  return (
    <StyledRoot>
      <Screen desktop>
        <SliderIndexWrapper>
          <section>
            <SlideIndexView nowIndex={page.slideIndex + 1} slideSize={children?.length} />
          </section>
        </SliderIndexWrapper>
      </Screen>
      <section className="page-carousel">
        <Slider ref={(elem) => (slider = elem)} {...settings}>
          {children}
        </Slider>
      </section>
      <Screen desktop>
        <ButtonBox>
          <ButtonWrapper>
            <PrevArrow onClick={prevMove} />
            <NextArrow onClick={nextMove} />
          </ButtonWrapper>
        </ButtonBox>
      </Screen>
    </StyledRoot>
  );
}

export default AutoImageSlider;
