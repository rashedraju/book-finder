import styled from 'styled-components';

export const StyledBookPreview = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

export const ImageWraper = styled.figure`
    width: 40%;
    text-align: center;
    img {
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 1rem;
        height: 15rem;
        transform-origin: 0 0 0;
        transition: transform 0.2s ease;
        &:hover {
            transform: rotateY(-20deg);
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 100%;
        span {
            margin: 0 auto;
        }
    }
`;

export const DetailsWrapper = styled.div`
    width: 60%;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
`;

export const Author = styled.p`
    small {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

export const Description = styled.p`
    margin: 1rem 0;
`;
