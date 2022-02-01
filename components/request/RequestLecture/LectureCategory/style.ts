import styled from "styled-components";
import { colors } from "styles/colors";

interface IProps {
  open: boolean;
  categorySelected: string;
}

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

const CategoryWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const CategoryButton = styled.button<IProps>`
  width: 63rem;
  height: 6.8rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: ${(props) => (props.open ? "2.8rem 2.8rem 0 0" : "4.8rem")};

  display: flex;
  padding: 2.2rem 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: "Pretendard-Regular";
    font-size: 2rem;
    color: ${(props) => (props.categorySelected === "" ? `${colors.gray4}` : "#000000")};

    & > svg {
      transform: rotate(${(props) => (props.open ? "180deg" : "0")});
    }
  }
`;

const DropdownWrapper = styled.span``;

const CategoryList = styled.div`
  border-bottom-left-radius: 2.8rem;
  border-bottom-right-radius: 2.8rem;
  background-color: white;
  list-style: none;
  padding-left: 4rem;
  width: 63rem;
  height: 32.4rem;
  padding-top: 1rem;
  position: absolute;

  li {
    font-family: "Pretendard-Regular";
    font-size: 2rem;
    padding-top: 1rem;
    padding-bottom: 2.2rem;
    width: 100%;
    display: flex;
    cursor: pointer;
  }
`;

export const CategoryListItem = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2rem;
  padding-top: 1rem;
  padding-bottom: 2.2rem;
  width: 100%;
  display: flex;
  cursor: pointer;
`;
export { CategoryButton, CategoryList, CategoryWrapper, DropdownWrapper, LectureCategoryBox };
