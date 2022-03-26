import Link from "next/link";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 41.6rem;
  width: 30.4rem;
  margin-bottom: 2.8rem;
  padding: 1.7rem 1.8rem;

  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 1);

  transition: all 0.15s;
  box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.14);
  }
`;

export const CardTop = styled.div`
  margin-bottom: 1.2rem;
  text-align: right;
  & svg {
    cursor: pointer;
  }
  & svg + svg {
    margin-left: 2rem;
  }
`;

export const LectureTitleName = styled.a`
  height: 10.4rem;
  font-family: "Pretendard-SemiBold";
  color: ${colors.mildBlack};
  font-size: 2.2rem;
  line-height: 3rem;
  text-align: left;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.gray2};
`;

export const LectureInfoBox = styled.div`
  display: flex;
  height: 7.2rem;
  justify-content: space-between;
  flex-direction: column;
  margin: 1.6rem 0;
  & svg {
    vertical-align: sub;
  }
`;

export const LectureInfo = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 1.7rem;
  text-align: left;
  margin-left: 1rem;
  color: ${colors.gray6};
`;

export const LectureTagBox = styled(LectureInfoBox)`
  min-width: 26rem;
  width: 50.2rem;
  align-items: center;
  padding: 0 2.4rem;
  border: none;
  overflow: auto;
`;

export const LectureTag = styled.span`
  background-color: ${colors.gray2};
  border-radius: 3.5rem;
  padding: 0.5rem 1.4rem;
  height: 2.4rem;

  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;

  color: ${colors.subBlack};

  margin-top: 0.65rem;
  margin-bottom: 0.65rem;
  margin-right: 0.8rem;

  &:last-child {
    margin-right: 0rem;
  }
`;

export const TagWrapper = styled.div`
  width: 41.6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;
