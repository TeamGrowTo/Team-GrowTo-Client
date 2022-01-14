import CardTitle from "components/process/CardTitle";
import Title from "components/process/Title";

import { CardChoice, Container, NextButton, NextButtonWrapper, StyledRoot } from "./style";
function ProcessTag() {
  const te = "마케팅";

  return (
    <StyledRoot>
      <Container>
        <Title></Title>
        <CardTitle></CardTitle>
        <CardChoice></CardChoice>
        <NextButtonWrapper>
          <NextButton>다음 &gt;</NextButton>
        </NextButtonWrapper>
      </Container>
    </StyledRoot>
  );
}

export default ProcessTag;
