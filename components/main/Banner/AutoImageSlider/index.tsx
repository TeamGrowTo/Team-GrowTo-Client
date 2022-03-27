import { SliderBox, SliderWrapper } from "./style";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

function AutoImageSlider({ children }: Props) {
  //children 배열로 만드는 로직 작성

  return (
    <SliderBox>
      <SliderWrapper>{children}</SliderWrapper>
    </SliderBox>
  );
}

export default AutoImageSlider;
