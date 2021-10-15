import styled from "styled-components";
import { Section } from "../../assets/styles/Component.styled";
import { flexCenter } from "../../assets/styles/utility.styled";

export const HomeStyled = styled(Section)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        justify-content: flex-start;
        flex-direction: column;
    }
`;

export const HomeContent = styled.div`
    ${flexCenter}
    flex-direction: column;
    text-align: center;
    & > * {
        margin: 0.5rem 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        order: 2;
    }
`;

export const Hero = styled.h1``;
export const HeroText = styled.h5`
    color: ${({ theme }) => theme.colors.secondary.light};
    font-weight: 400;
`;
export const DisplayWrapper = styled.div`
    text-align: center;
    svg {
        width: 70%;
        height: 100%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex: 0;
        svg {
            width: 100%;
        }
    }
`;
