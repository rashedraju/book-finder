import { keyframes } from "styled-components";

export const foldingWidth = keyframes`
    0%{
        max-width: 0;
        padding: 0.5rem 1rem;
    }
    25%{
        max-width: 100%;
    }
    75%{
        max-width: 100%;
    }
    100%{
        max-width: 0;
        padding: 0.5rem 1rem;
    }
`;
