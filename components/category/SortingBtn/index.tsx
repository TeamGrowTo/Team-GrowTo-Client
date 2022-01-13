import React from 'react'

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
