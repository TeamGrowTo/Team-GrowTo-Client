import Screen from "styles/Screen";

import { Description, Highlight } from "./style";

export function ProcessButtonDescription() {
  return (
    <>
      <Screen desktop>
        <Description>
          <Highlight>*5초</Highlight> 면 나에게 맞는 강의를 찾을 수 있어요
        </Description>
      </Screen>
      <Screen mobile>
        <Description>
          <Highlight>*5초</Highlight>면 나에게 맞는 강의를 찾을 수 있어요
        </Description>
      </Screen>
    </>
  );
}
