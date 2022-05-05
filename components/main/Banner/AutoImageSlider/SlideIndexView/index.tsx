import React from "react";

import { Highlight, StyledRoot } from "./style";
interface Props {
  nowIndex?: number;
  slideSize?: number;
}

function SlideIndexView({ nowIndex = 0, slideSize = 0 }: Props) {
  return (
    <StyledRoot>
      <Highlight>{nowIndex}</Highlight>/{slideSize}
    </StyledRoot>
  );
}

export default SlideIndexView;
