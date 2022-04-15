import Image from "next/image";
import { MainToProcessButtonIcon } from "public/assets/icons";
import React from "react";

import { Button } from "./style";

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function NextArrow({ onClick }: Props) {
  const onHandleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  return (
    <Button onClick={onClick}>
      <Image src={MainToProcessButtonIcon} alt="nextImageIcon" quality={100} />
    </Button>
  );
}

export default NextArrow;
