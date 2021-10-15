import React from "react";
import { Header as HeaderStyled, Logo } from "./Header.styled";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <HeaderStyled>
            <Logo> Book Finder. </Logo>
            <SearchBar />
            <Navigation />
        </HeaderStyled>
    );
};

export default Header;
