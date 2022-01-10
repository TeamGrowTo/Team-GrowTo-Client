import styled from 'styled-components';

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    margin-top: 10.4rem;
    margin-bottom: 13.9rem;
    & > h3 {
        font-size: 3.8rem;
        font-weight: bold;
        line-height: 4.6rem;
        margin-bottom: 1rem;
    }
    & > small {
        font-size: 1.8rem;
        color: #868686;
        margin-bottom: 5.6rem;
        line-height: 2.2rem;
        //나중에 {--gray4}로 바꾸기
    }
`;

const FieldWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 71.2rem;
`;

export { StyledRoot, FieldWrapper };
