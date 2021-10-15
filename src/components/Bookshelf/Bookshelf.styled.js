import styled from "styled-components";

export const BookshelfStyled = styled.div`
    overflow: hidden;
    position: relative;
`;

export const BookWrapper = styled.div`
    display: flex;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadow.primary.main};
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: column;
    }

    ${({ center }) => center && " justify-content: center"}
`;

export const SkeletonWrapper = styled.div`
    width: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
