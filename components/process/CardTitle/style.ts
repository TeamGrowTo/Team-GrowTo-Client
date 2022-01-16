import { ProgressPrice, ProgressTag, ProgressTime } from "public/assets/icons";
import styled from "styled-components";

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
`;

export const CardText = styled.div`
  margin-left: 6.4rem;
  font-size: 2rem;
  line-height: 3rem;
  & > p:first-child {
    font-family: "Pretendard-Regular";
  }
  & > p:last-child {
    font-family: "Pretendard-Bold";
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
