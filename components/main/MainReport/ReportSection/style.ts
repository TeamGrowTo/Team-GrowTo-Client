import styled from "styled-components";
import { colors } from "styles/color";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 9.7rem;
  height: 9.7rem;
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
`;

const Data = styled.div`
  color: ${colors.mainBlue};
`;

const Count = styled.span`
  font-size: 4.4rem;
`;

const Unit = styled.span`
  font-size: 3rem;
`;

export { StyledRoot, Icon, TitleWrapper, Title, Data, Count, Unit };
