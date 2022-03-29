import CategoryTitle from "components/process/CategoryTitle";
import Title from "components/process/Title";
import Image from "next/image";
import {
  NextArrowAble,
  NextArrowDisabled,
  ProcessPlayIcon,
  ProcessSquareIcon,
} from "public/assets/icons";
import React from "react";
import styled from "styled-components";
import { colors } from "styles/colors";
import Screen from "styles/Screen";
function ProcessCategory() {
  return (
    <>
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
          <CategoryTitle></CategoryTitle>
        </ProcessBox>
      </StyledRoot>
    </>
  );
}

export default ProcessCategory;

export const StyledRoot = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
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
`;
