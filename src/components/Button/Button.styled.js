import styled, { css } from "styled-components";

const btnStyle = css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
`;

export const ButtonPrimary = styled.button`
    ${btnStyle};
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text};
    ${({ center }) => center && "display: block; margin: 0 auto"};
`;

export const ButtonOutline = styled.button`
    ${btnStyle};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary.main};
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    ${({ center }) => center && "display: block; margin: 0 auto"};
`;
