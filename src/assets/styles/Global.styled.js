import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
    }
    html{
        box-sizing: border-box;
    }
    body{
        box-sizing: inherit;
        font-family: 'Exo', sans-serif;
        font-size: 1rem;
        line-height: 1.7;
        color: ${({ theme }) => theme.colors.text}
    }

    a{
        color: ${({ theme }) => theme.colors.link};
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
    
    input{
        font-size: inherit;
        box-sizing: border-box;
        &,
        &:hover,
        &:active,
        &:focus {
            border: none;
            outline: none;
        }
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 0;
        &,
        &:hover,
        &:active,
        &:focus{
            box-shadow: none;
            outline: none;
        }
    }
`;

export default GlobalStyle;
