import { Dot, StyledRoot } from "./style";

interface Props {
  listLength: number | 0;
  sliderPage: number | 0;
}

function ResultCardDot({ listLength, sliderPage }: Props) {
  const makeDot = () => {
    const arr = [];

    for (let i = 0; i < listLength; i++) arr.push(i);

    return arr;
  };

  return (
    <StyledRoot>
      {makeDot().map((dotNum) => (
        <Dot key={dotNum} isSelected={sliderPage === dotNum}></Dot>
      ))}
    </StyledRoot>
  );
}

export default ResultCardDot;
