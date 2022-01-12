import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.section`
  display: flex;
  width: 100%;
  height: 80rem;
  background: ${colors.gray4};
  font-family: "Pretendard-Regular";
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 96rem;
`;
export const StoryLink = styled.div`
  margin-bottom: 1.6rem;
  margin-top: 9.1rem;
  text-align: right;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14.8rem;
  padding: 5.4rem;
  width: 96rem;
  height: 22.7rem;
  border-radius: 2.6rem;
  background: white;
  & > p {
    margin: auto;
    font-size: 2.6rem;
    line-height: 3.8rem;
  }
  & > p:last-child {
    font-size: 1.6rem;
    color: ${colors.mainBlue};
  }
  & > p > span {
    color: ${colors.mainBlue};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    color: white;
    font-size: 3.6rem;
    font-weight: bold;
    margin: 3.2rem;
  }
  & > p > span {
    color: ${colors.mainBlue};
  }
`;

export const ShareButton = styled.button`
  width: 26rem;
  height: 8.8rem;
  background: ${colors.mainBlue};
  border-radius: 5rem;
  font-size: 2.4rem;
  font-weight: 600;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
