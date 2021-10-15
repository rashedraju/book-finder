import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "../../assets/styles/utility.styled";

export const Nav = styled.nav`
    ul {
        ${flexCenter}
        li {
            padding: 0.5rem 0.5rem;
        }
    }
`;

export const Link = styled(NavLink)`
    border-bottom: ${({ theme, active }) =>
        active && `2px solid ${theme.colors.active}}`};
`;
