import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6rem 2.3rem;
`;

const TitleWrapper = styled.div`
  width: 17rem;
  height: 5.2rem;
  border-radius: 4rem;
  margin-top: 1.8rem;
  margin-bottom: 2.4rem;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 2rem;
  /* 글씨체 세미볼드로 바꿔야 합니다 */
  font-family: "Pretendard-Bold";
`;

const Data = styled.div`
  color: ${colors.subBlack};
  display: flex;
  align-items: center;
`;

const Count = styled.span`
  font-size: 4.4rem;
  font-family: "Pretendard-Bold";
  letter-spacing: -0.1rem;
  margin-right: 0.6rem;
`;

const Unit = styled.span`
  font-size: 3rem;
  font-family: "Pretendard-Bold";
  /*세미볼드로 설정 바꿔주기 */
`;

export { Count, Data, StyledRoot, Title, TitleWrapper, Unit };
