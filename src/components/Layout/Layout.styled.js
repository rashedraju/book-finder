import styled from "styled-components";

export const LayoutStyled = styled.div`
    width: 100%;
    ${({ theme }) => {
        return `background-image: linear-gradient(300deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main}, ${theme.colors.tertiary.main});`;
    }}
    min-height: 100vh;
    overflow: hidden;
`;
