import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BookStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    margin: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadow.primary.main};
    max-width: 14rem;
    min-width: 12rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    transition: transform 0.2s ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 8rem;
        height: 11rem;
    }
`;

const textStyle = css`
    margin-top: 1rem;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const BookTitle = styled.p`
    ${textStyle};
`;
export const BookAuthor = styled.small`
    ${textStyle};
`;
