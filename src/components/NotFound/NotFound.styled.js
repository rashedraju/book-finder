import styled from 'styled-components';
import { flexCenter } from '../../assets/styles/utility.styled';

export const Wrapper = styled.div`
    ${flexCenter};
    flex-direction: column;
    margin: 1rem;

    svg {
        width: 15rem;
        height: 15rem;
    }
`;
