import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

interface IProps {
  open: boolean;
  categorySelected: string;
}

export const LectureCategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 2.8rem;
  ${applyMediaQuery("mobile")} {
    margin-bottom: 2rem;
  }

  p {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    margin-bottom: 0.8rem;
    color: ${colors.gray6};
    ${applyMediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
`;

export const CategoryButton = styled.button<IProps>`
  cursor: pointer;
  width: 63rem;
  height: 6.8rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: ${(props) => (props.open ? "2.8rem 2.8rem 0 0" : "4.8rem")};
  display: flex;
  padding: 2.2rem 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 4rem;
    padding: 1.15rem 2.4rem;
    border-radius: ${(props) => (props.open ? "2.6rem 2.6rem 0 0" : "4.8rem")};
  }

  span {
    font-family: "Pretendard-Regular";
    font-size: 2rem;
    color: ${(props) => (props.categorySelected === "" ? `${colors.gray4}` : `${colors.subBlack}`)};
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
    & > svg {
      transform: rotate(${(props) => (props.open ? "180deg" : "0")});
    }
  }
`;

export const DropdownWrapper = styled.span``;

export const CategoryList = styled.div`
  border-bottom-left-radius: 2.8rem;
  border-bottom-right-radius: 2.8rem;
  background-color: ${colors.white};
  width: 63rem;
  height: 32.4rem;
  padding-top: 1.2rem;
  padding-left: 4rem;
  position: absolute;
  ${applyMediaQuery("mobile")} {
    border-bottom-left-radius: 2.6rem;
    border-bottom-right-radius: 2.6rem;
    width: 32.8rem;
    height: 24.8rem;
    padding-top: 1.5rem;
    padding-left: 2.7rem;
  }
`;

export const CategoryListItem = styled.div`
  cursor: pointer;
  font-family: "Pretendard-Regular";
  color: ${colors.subBlack};
  font-size: 2rem;
  padding-top: 1rem;
  padding-bottom: 2.2rem;
  width: 100%;
  display: flex;

  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
  }
`;
