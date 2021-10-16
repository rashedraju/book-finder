import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: center;

    @media (max-width: 567px) {
        flex-direction: column;
    }

    & > form {
        width: 100%;
        flex: 1;
        text-align: center;
    }
`;

export const Logo = styled.h1`
    font-weight: bold;
`;
