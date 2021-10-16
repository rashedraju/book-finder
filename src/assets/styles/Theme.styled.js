import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const theme = {
    colors: {
        primary: {
            main: '#3498db'
        },
        secondary: {
            main: '#1abc9c'
        },
        tertiary: {
            main: '#2ecc71'
        },

        dark: '#211E35',
        text: '#FFFFFF',
        link: '#FFFFFF',
        white: '#FFFFFF',
        active: '#FFFFFF'
    },
    breakpoint: {
        desktop: '1200px',
        tablet: '900px',
        mobile: '600px'
    },
    shadow: {
        primary: '0 0 5px #F0F0F0'
    }
};

const ThemeProvider = ({ children }) => (
    <StyledThemeProvider theme={theme}> {children} </StyledThemeProvider>
);

export default ThemeProvider;
