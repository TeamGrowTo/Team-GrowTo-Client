import Link from "next/link";
import { tagType } from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 41.6rem;
  width: 30.4rem;
  margin: 1.4rem 1rem;

  border-radius: 2.2rem;
  background: white;

  transition: all 0.15s;
  box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: ${colors.btnCategoryPressed};
  }
`;

export const CardTop = styled.div`
  /* height: 4.8rem; */
  padding: 1.6rem 1.8rem 1.2rem 1.8rem;
  text-align: right;
  & svg {
    cursor: pointer;
  }
  & svg + svg {
    margin-left: 2rem;
  }
`;

export const TitleBox = styled.div`
  /* width: 30.4rem; */
  width: 26.8rem;
  margin: 2.2rem 1.7rem 0rem 1.8rem;
  height: 10rem;
  //제목 3줄이상 자르기, 말줄임표
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.gray2};
`;

export const TitleName = styled.a`
  font-family: "Pretendard-SemiBold";

  color: ${colors.mildBlack};
  font-size: 2.2rem;
  line-height: 3rem;
  text-align: left;

  //제목 4줄 이상이면 자르기
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LectureInfoBox = styled.div`
  display: flex;
  height: 7.4rem;
  justify-content: space-between;
  flex-direction: column;
  margin: 1.2rem 1.8rem 1.8rem 1.9rem;
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

export const Tag = styled.span<{ type: tagType }>`
  background-color: ${(props) => colors[props.type]};
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
  ${applyMediaQuery("mobile")} {
    height: 2.2rem;
    line-height: 2.2rem;
    padding: 0rem 0.8rem;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  padding: 0 0 0 1.8rem;
  flex-direction: row;
  flex-grow: 1;
  align-content: flex-start;
  flex-wrap: wrap;
  //scroll
  margin-right: 0.8rem; //스크롤 오르쪽 띄우기위해서
  margin-bottom: 0.4rem;
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
  scrollbar-width: 0.8rem;
  scrollbar-color: ${colors.gray2};
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: unset;
    padding: unset;
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
  ${applyMediaQuery("mobile")} {
    height: 4.8rem;
    margin: 0;
  }
`;

export const Site = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: ${colors.gray6};
  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
  }
`;

export const Price = styled.span`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.8rem;
  color: ${colors.mildBlack};
  ${applyMediaQuery("mobile")} {
    font-size: 1.5rem;
  }
`;

export const PriceUnit = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  color: ${colors.mildBlack};
  margin-left: 0.2rem;
  margin-right: 1rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
  }
`;
