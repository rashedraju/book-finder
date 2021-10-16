import React from 'react';
import Navigation from '../Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';
import { Header as HeaderStyled, Logo } from './Header.styled';

const Header = () => (
    <HeaderStyled>
        <Logo> Book Finder. </Logo>
        <SearchBar />
        <Navigation />
    </HeaderStyled>
);

export default Header;
