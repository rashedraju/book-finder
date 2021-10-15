import styled from "styled-components";
import { flexCenter } from "../../assets/styles/utility.styled";

export const ScrollerStyled = styled.div`
    ${flexCenter};
    position: absolute;
    ${({ left }) => {
        if (left) {
            return "left: 0";
        }
        return "right: 0";
    }};
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.secondary.main};
    padding: 1rem 0.5rem;
    cursor: pointer;
    display: ${({ left }) => left && "none"};
    font-size: 1.5rem;
    z-index: 999;
    box-shadow: ${({ theme }) => theme.shadow.primary.main};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: none;
    }
`;
