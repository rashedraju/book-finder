import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

export const buttonStyle = css`
    padding: 0.5rem 3rem;
    border: 2px solid ${({ theme }) => theme.colors.active};
    border-radius: none;
`;

export const sectionMoveLeft = keyframes`
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: : translateX(0);
    }
`;

export const Container = styled.div`
    max-width: ${({ theme }) => theme.breakpoint.desktop};
    margin: 0 auto;
    padding: 1rem;
`;

export const ButtonLink = styled(NavLink)`
    ${buttonStyle};
`;
export const Button = styled.button`
    ${buttonStyle};
    cursor: pointer;
`;

export const SectionTitle = styled.h2`
    margin: 1rem auto;
    text-align: center;
    text-decoration: underline 2px ${({ theme }) => theme.colors.active};
`;

export const Section = styled.section`
    height: 100%;
`;
