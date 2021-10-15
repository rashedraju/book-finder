import React from "react";
import { ReactComponent as HomeDisplay } from "../../assets/img/home-display.svg";
import {
    HomeStyled,
    HomeContent,
    Hero,
    HeroText,
    DisplayWrapper,
} from "./Home.styled";
import { ButtonLink } from "../../assets/styles/Component.styled";

const Home = () => {
    return (
        <HomeStyled>
            <HomeContent>
                <Hero>Find your best friend</Hero>
                <HeroText>
                    A better way to discover books and directly support authors
                </HeroText>
                <ButtonLink to="explore">Explore</ButtonLink>
            </HomeContent>
            <DisplayWrapper>
                <HomeDisplay />
            </DisplayWrapper>
        </HomeStyled>
    );
};

export default Home;
