import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.8rem 1.4rem;
  margin-bottom: 1.2rem;
  max-width: 32.8rem;
  min-width: 30rem;
  background: white;

  box-shadow: 0rem 0.2rem 0.6rem rgba(3, 0, 167, 0.08);
  border-radius: 1.8rem;

  &:hover {
    background: #fbfcff;
  }
`;

const LectureTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px ${colors.blue3};
  padding-bottom: 1.2rem;
  align-items: center;
`;

const MoveLinkButton = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LectureTitleName = styled.h3`
  width: 90%;
  font-family: "Pretendard-Bold";
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: left;
  color: ${colors.subBlack};
`;

const ArrowWrapper = styled.div`
  & path {
    stroke: ${colors.mainBlue};
  }
`;

const LectureInfoBox = styled.div`
  padding: 1.2rem 0 0.4rem 0;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const LectureInfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  min-width: 11.4rem;
  margin-bottom: 0.6rem;
  justify-content: space-between;
`;

const LectureInfoName = styled.span`
  font-family: "Pretendard-Light";
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${colors.subBlack};
`;

const LectureInfoData = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${colors.subBlack};
`;

const LectureTag = styled.span`
  background-color: ${colors.gray2};
  border-radius: 3.5rem;
  padding: 0.2rem 0.6rem;
  height: 1.8rem;
  margin-top: 0.6rem;

  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  color: ${colors.subBlack};
  & + & {
    margin-left: 0.4rem;
  }
`;

export {
  ArrowWrapper,
  LectureInfoBox,
  LectureInfoData,
  LectureInfoName,
  LectureInfoWrapper,
  LectureTag,
  LectureTitleBox,
  LectureTitleName,
  MoveLinkButton,
  StyledRoot,
};
