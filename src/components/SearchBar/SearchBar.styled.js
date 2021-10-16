import styled from 'styled-components';

export const SearchForm = styled.form``;

export const SearchField = styled.input.attrs({
    type: 'text',
    placeholder: 'Search by name, title or author'
})`
    width: 75%;
    background-color: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.secondary.light};
    padding: 0.8rem 2rem;
    margin: 1rem 0;
    border-radius: 1.5rem;
    box-shadow: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 100%;
    }
`;
