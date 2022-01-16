import styled from "styled-components";
import { colors } from "styles/color";

const LectureCategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 3rem;

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const CategoryWrapper = styled.div``;

const CategoryButton = styled.div`
  width: 63rem;
  height: 6.8rem;
  background-color: ${colors.gray2};
  border-radius: 4.8rem;
  display: flex;
  padding: 2.2rem 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: "Pretendard-Regular";
    font-size: 2rem;
    color: ${colors.gray4};

    &:nth-child(2) {
      cursor: pointer;
    }
  }
`;

const CategoryList = styled.ul`
  border-bottom-left-radius: 2.8rem;
  border-bottom-right-radius: 2.8rem;
  background-color: white;
  list-style: none;
  padding-left: 4rem;
  width: 63rem;
  height: 32.4rem;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    font-family: "Pretendard-Regular";
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 2.2rem;
  }
`;

export { CategoryButton, CategoryList, CategoryWrapper, LectureCategoryBox };
