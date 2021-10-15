import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import ThemeProvider from "./assets/styles/Theme.styled";
import GlobalStyle from "./assets/styles/Global.styled";
import ContextProvider from "./contexts/ContextProvider";
import { BookProvider } from "./contexts/BookContext";

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider
            components={[RouterProvider, ThemeProvider, BookProvider]}
        >
            <GlobalStyle />
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
