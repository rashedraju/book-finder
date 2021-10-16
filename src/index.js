import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import App from './App';
import GlobalStyle from './assets/styles/Global.styled';
import ThemeProvider from './assets/styles/Theme.styled';
import { BookProvider } from './contexts/BookContext';
import ContextProvider from './contexts/ContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider components={[RouterProvider, ThemeProvider, BookProvider]}>
            <GlobalStyle />
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
