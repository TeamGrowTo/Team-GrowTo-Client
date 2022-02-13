import {
  ProgressPrice,
  ProgressPriceM,
  ProgressTag,
  ProgressTagM,
  ProgressTime,
  ProgressTimeM,
} from "public/assets/icons";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
export const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 102rem;
  height: 16.7rem;
  margin-top: 4rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-width: 0.2rem 0.2rem 0;
  border-color: white;
  border-style: solid;
  border-radius: 2.8rem 2.8rem 0 0;
  ${applyMediaQuery("mobile")} {
    width: 36rem;
    height: 9.2rem;
    margin: 0;
  }
`;

export const CardText = styled.div`
  margin-left: 6.4rem;
  font-size: 2rem;
  line-height: 3rem;
  color: ${colors.gray6};
  & > p:first-child {
    font-family: "Pretendard-Regular";
  }
  & > p:last-child {
    font-family: "Pretendard-Bold";
  }
  ${applyMediaQuery("mobile")} {
    margin-left: 1.6rem;
    & > p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

export const ProgressBarTag = styled(ProgressTag)`
  margin-right: 5.4rem;
`;

export const ProgressBarTime = styled(ProgressTime)`
  margin-right: 5.4rem;
`;

export const ProgressBarPrice = styled(ProgressPrice)`
  margin-right: 5.4rem;
`;

export const ProgressBarTagM = styled(ProgressTagM)`
  margin-right: 1.6rem;
`;

export const ProgressBarTimeM = styled(ProgressTimeM)`
  margin-right: 1.6rem;
`;

export const ProgressBarPriceM = styled(ProgressPriceM)`
  margin-right: 1.6rem;
`;
