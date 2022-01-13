import Link from "next/link";

import { ChoiceCard, Container, StyledRoot, Title } from "./style";
function ProcessPrice() {
  return (
    <StyledRoot>
      <Container>
        <Title>
          <Link href="/" passHref>
            <p>&lt; 뒤로가기</p>
          </Link>
          <h2>맞춤 강의 찾기</h2>
        </Title>
        <ChoiceCard></ChoiceCard>
      </Container>
    </StyledRoot>
  );
}

export default ProcessPrice;
