import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

interface IProps {
  open: boolean;
  categorySelected: string;
}

export const LectureCategoryContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 3.5rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 2rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${colors.gray6};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;

export const CategoryBox = styled.div`
  position: relative;
`;

export const CategoryButton = styled.button<IProps>`
  cursor: pointer;
  width: 78.75rem;
  height: 8.5rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: ${(props) => (props.open ? "2.8rem 2.8rem 0 0" : "4.8rem")};
  border: 0.125rem solid ${colors.white};
  padding: 2.75rem 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4rem;
    padding: 1.15rem 2.4rem;
    border-radius: ${(props) => (props.open ? "3.25rem 3.25rem 0 0" : "6rem")};
  }

  span {
    font-family: "Pretendard-Regular";
    font-size: 2.5rem;
    color: ${(props) => (props.categorySelected === "" ? `${colors.gray4}` : `${colors.subBlack}`)};
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
`;

export const DropdownWrapper = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  & > svg {
    transform: rotate(${(props) => (props.open ? "180deg" : "0")});
  }
`;

export const CategoryList = styled.div`
  border-bottom-left-radius: 3.5rem;
  border-bottom-right-radius: 3.5rem;
  background-color: ${colors.white};
  width: 78.75rem;
  height: 39.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  position: absolute;

  ${applyMediaQuery("mobile")} {
    border-bottom-left-radius: 2.6rem;
    border-bottom-right-radius: 2.6rem;
    width: 32.8rem;
    height: 23.2rem;
  }
`;

export const CategoryListWrapper = styled.div`
  margin-left: 0.375rem;
  margin-right: 0.375rem;
  &:hover {
    background-color: ${colors.blue1};
  }
  &:nth-child(6) {
    border-bottom-left-radius: 3.5rem;
    border-bottom-right-radius: 3.5rem;
  }

  ${applyMediaQuery("mobile")} {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    &:nth-child(6) {
      border-bottom-left-radius: 2.6rem;
      border-bottom-right-radius: 2.6rem;
    }
  }
`;

export const CategoryListItem = styled.div`
  cursor: pointer;
  font-family: "Pretendard-Regular";
  color: ${colors.subBlack};
  display: flex;
  font-size: 2.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4.75rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 2.5rem;
  }
`;
