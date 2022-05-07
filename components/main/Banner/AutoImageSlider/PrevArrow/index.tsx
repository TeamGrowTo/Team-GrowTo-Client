import Image from "next/image";
import { MainToProcessButtonIcon } from "public/assets/icons";
import React from "react";

import { Button, ImageWrapper } from "./style";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PrevArrow({ onClick }: Props) {
  return (
    <Button onClick={onClick}>
      <ImageWrapper>
        <Image src={MainToProcessButtonIcon} alt="nextImageIcon" quality={100} />
      </ImageWrapper>
    </Button>
  );
}

export default PrevArrow;
