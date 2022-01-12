import styled from "styled-components";
import { colors } from "styles/color";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6rem 2.3rem;
`;

const TitleWrapper = styled.div`
  width: 17rem;
  height: 5.2rem;
  border: 0.1rem solid ${colors.gray4};
  border-radius: 3.9rem;
  margin-top: 1.9rem;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 2rem;
  font-family: "Pretendard-Light";
`;

const Data = styled.div`
  color: ${colors.mainBlue};
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
