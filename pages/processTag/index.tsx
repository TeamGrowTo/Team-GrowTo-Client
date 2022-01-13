import Title from "components/process/Title";
import { ProgressTag } from "public/assets/icons";

import {
  CardChoice,
  CardTitle,
  Container,
  NextButton,
  NextButtonWrapper,
  StyledRoot,
} from "./style";
function ProcessTag() {
  return (
    <StyledRoot>
      <Container>
        <Title></Title>
        <CardTitle>
          <ProgressTag />
        </CardTitle>
        <CardChoice></CardChoice>
        <NextButtonWrapper>
          <NextButton>다음 &gt;</NextButton>
        </NextButtonWrapper>
      </Container>
    </StyledRoot>
  );
}

export default ProcessTag;
