import React from 'react'
import styled from 'styled-components';
import { colors } from "styles/colors";

interface SortingBtnProps {
  children: React.ReactNode;
  dropItemName: string[];
}

//sorting기준에 따라 dropDownList가 다르게보이도록 하자.
function SortingBtn({ children, dropItemName }: SortingBtnProps) {
  return (
    <StyledRoot>
      <div>
        {children}
      </div>
      <DropDownBox>
        {dropItemName.map(
          (item) => (<DropDownItem>{item}</DropDownItem>))}
      </DropDownBox>
    </StyledRoot>
  )
}

export default SortingBtn

const StyledRoot = styled.button`
  background-color: white;
  position: relative;
  height: 4.8rem;
  padding: 1.6rem 2.7rem;

  border: 1px solid #E3E3E3;
  border-radius: 4.8rem;

  font-family: "Pretendard-Medium";
  color: ${colors.gray6}

  &:active {
    background-color: ${colors.gray2};
  }

  & + & {
    margin-left: 1.2rem;
  }
`;

const DropDownBox = styled.div`
  position: absolute;
  top: 5.4rem;
  left: 0;

  width: 18rem;
  height: 10rem;

  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 1.2rem;

  & button:first-child {
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }

  & button:last-child {
    border-bottom-left-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
  }
`;

const DropDownItem = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.7rem 2.4rem;

  text-align: left;
  font-family: "Pretendard-Medium";
  font-size: 1.4rem;
  color: ${colors.gray6};


  &:hover {
    background: ${colors.gray1};
  }
`;