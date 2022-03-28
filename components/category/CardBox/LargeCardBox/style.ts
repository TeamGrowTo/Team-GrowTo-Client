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

  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 1);

  transition: all 0.15s;
  box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.14);
  }
`;

export const CardTop = styled.div`
  padding: 1.7rem 1.8rem 1.2rem 1.8rem;
  text-align: right;
  & svg {
    cursor: pointer;
  }
  & svg + svg {
    margin-left: 2rem;
  }
`;

export const TitleBox = styled(Link)`
  /* width: 30.4rem; */
  width: 26.8rem;
  //제목 3줄이상 자르기, 말줄임표
  height: 10.4rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TitleName = styled.a`
  height: 9.6rem;
  margin: 0 1.8rem 0.8rem 1.8rem;
  font-family: "Pretendard-SemiBold";
  color: ${colors.mildBlack};
  font-size: 2.2rem;
  line-height: 3rem;
  text-align: left;

  border-bottom: 1px solid ${colors.gray2};

  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word; //단어 단위로 자르기
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LectureInfoBox = styled.div`
  display: flex;
  height: 7.2rem;
  justify-content: space-between;
  flex-direction: column;
  margin: 1.2rem 1.8rem 1.8rem 1.8rem;
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

export const Tag = styled.span`
  background-color: ${colors.tagLevel};
  border-radius: 3.5rem;
  padding: 0rem 1.2rem;
  height: 2.8rem;
  line-height: 2.8rem;

  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: ${colors.mildBlack};

  margin-bottom: 0.6rem;
  margin-right: 0.6rem;

  &:last-child {
    margin-right: 0rem;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  height: 10rem;
  padding: 0 0 0 1.8rem;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  //scroll
  margin-right: 0.8rem;
  overflow: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background-color: ${colors.gray0};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${colors.gray2};
  }
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;

export const CardBottom = styled.div`
  height: 5.4rem;
  margin: 0 1.8rem;
  border-top: 1px solid ${colors.gray2};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & * {
    vertical-align: middle;
  }
`;

export const Site = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: ${colors.gray6};
`;

export const Price = styled.span`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.8rem;
  color: ${colors.mildBlack};
`;

export const PriceUnit = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  color: ${colors.mildBlack};
  margin-left: 0.2rem;
  margin-right: 1rem;
`;
