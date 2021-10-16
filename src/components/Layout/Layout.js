import React from 'react';
import { Container } from '../../assets/styles/Component.styled';
import Header from '../Header/Header';
import { LayoutStyled } from './Layout.styled';

const Layout = ({ children }) => (
    <LayoutStyled>
        <Container>
            <Header />
        </Container>
        <main>
            <Container>{children}</Container>
        </main>
    </LayoutStyled>
);

export default Layout;
