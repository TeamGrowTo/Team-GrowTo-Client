import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const SelectBox = styled.div<{ selected: boolean }>`
  border: 1px solid #e3e3e3;
  border-radius: 4.8rem;
  display: inline-block;
  padding: 0 2.6rem 0 0;

  transition: 200ms;
  box-shadow: 0 0.2rem 0.6rem 0 #5858580a;

  cursor: pointer;

  &:focus-within {
    background-color: white;
    border: 1px solid ${colors.mainBlue};
    box-shadow: 0px 2px 12px rgba(69, 121, 255, 0.08);
    transition: 200ms;
    & > select {
      color: ${colors.mainBlue};
    }
  }
  & + & {
    margin-left: 1.2rem;
  }

  ${applyMediaQuery("mobile")} {
    & + & {
      margin-left: 0.6rem;
    }
  }

  ${applyMediaQuery("mobile")} {
    background: white;
    line-height: 3.4rem;
    padding: 0 1.2rem;

    & + & {
      margin-left: 0.6rem;
    }
  }
`;

export const Select = styled.select<{ selected: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: white;
  position: relative;
  height: 4.8rem;
  padding: 0 2.7rem;
  /* select태그 자체가 아닌 이걸 감싸는 div에 border를 준다 : 화살표아이콘 커스텀위해서 */
  border: none;
  border-radius: 4.8rem;
  outline: none;

  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  line-height: 4.8rem;
  color: ${colors.gray6};
  cursor: pointer;
  /* 기본 드롭다운 화살표 없애기 */
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${applyMediaQuery("mobile")} {
    height: 3.4rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-left: 0.8rem;
    background: white;
    padding: 0.1rem 0.8rem 0 0.1rem;
  }

  /* select 태그 선택 시 드랍다운 화살표 돌리기 */
  &:focus + svg {
    transform: rotate(180deg);
    transition: 200ms;
  }
  /* 드롭다운선택 후에도 남아있는 검은색 outline없애기 */
  &:focus-visible {
    outline: none;
  }
`;
// export const StyledRoot = styled.button<{ isDisable: boolean }>`
//   display: inline-flex;
//   align-items: center;
//   background-color: white;
//   position: relative;
//   height: 4.8rem;
//   padding: 1.6rem 2.7rem;

//   border: 1px solid #e3e3e3;
//   border-radius: 4.8rem;

//   font-family: "Pretendard-Medium";
//   line-height: 4.8rem;
//   & span {
//     color: ${(props) => (props.isDisable ? colors.gray4 : colors.gray6)};
//   }
//   transition: 200ms;
//   box-shadow: 0 0.2rem 0.6rem 0 #5858580a;
//   cursor: ${(props) => (props.isDisable ? "unset" : "pointer")};
//   path {
//     stroke: ${(props) => props.isDisable && colors.gray3};
//   }
//   &:hover {
//     background-color: ${(props) => (props.isDisable ? "none" : colors.gray2)};
//     transition: 200ms;
//   }

//   &:focus {
//     background-color: white;
//     border: 1px solid ${colors.mainBlue};
//     box-shadow: 0px 2px 12px rgba(69, 121, 255, 0.08);
//     transition: 200ms;
//     span {
//       color: ${colors.mainBlue};
//     }
//     path {
//       stroke: ${colors.mainBlue};
//     }
//   }

//   & + & {
//     margin-left: 1.2rem;
//   }

//   ${applyMediaQuery("mobile")} {
//     height: 3.4rem;
//     line-height: 3.4rem;
//     padding: 1rem 1.2rem;
//     & + & {
//       margin-left: 0.6rem;
//     }
//   }
// `;

export const DropDownBox = styled.ul`
  position: absolute;
  top: 5.4rem;
  left: 0;

  width: 18rem;
  z-index: 3;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 1.2rem;
  cursor: pointer;
  & button:first-child {
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }

  & button:last-child {
    border-bottom-left-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
  }
`;

export const DropDownItem = styled.option`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.7rem 2.4rem;

  text-align: left;
  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  line-height: 2.8rem;
  color: ${colors.gray6};

  cursor: pointer;
  &:hover {
    background: ${colors.lightBlue};
  }
  &::before {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;

// const CriteriaItem = styled.span`
//   font-family: "Pretendard-Medium";
//   color: ${(props) => props.color || colors.gray3};
//   font-size: 1.4rem;
//   & + & {
//     margin-left: 0.8rem;
//   }

//   ${applyMediaQuery("mobile")} {
//     font-size: 1.2rem;
//     line-height: 1.4rem;
//     margin-left: 0.8rem;
//   }
// `;

// const BtnTextWrapper = styled.span`
//   margin-right: 1.2rem;
// `;
