import React from "react";
import { Container } from "../../assets/styles/Component.styled";
import Header from "../../components/Header/Header";
import { LayoutStyled } from "./Layout.styled";

const Layout = ({ children }) => {
    return (
        <LayoutStyled>
            <Container>
                <Header />
            </Container>
            <main>
                <Container>{children}</Container>
            </main>
        </LayoutStyled>
    );
};

export default Layout;
