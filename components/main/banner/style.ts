import styled from 'styled-components';

const StyledRoot = styled.div`
    width: 100%;
    height: 32.8rem;
    display: flex;
    justify-content: center;
    background: linear-gradient(108.46deg, #7000FF 31.64%, #8E0EF3 83.2%);
    flex-wrap: wrap;
`;

const IconWrapper = styled.span`
    display: flex;
    align-items: end;
`;

const TitleWrapper = styled.span`
width: 44.8rem;
    margin-right: 19.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h1 {
        color: white;
        font-size: 5.4rem;
        font-weight: 800;
        margin-bottom: 2.8rem;
    }
    & > h2 {
        color: white;
        font-size: 2.2rem;
        font-weight: 500;
    }
`;

export { StyledRoot, TitleWrapper, IconWrapper };
