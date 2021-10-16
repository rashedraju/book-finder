import React from 'react';
import { ReactComponent as HomeDisplay } from '../../assets/img/home-display.svg';
import { ButtonLink } from '../../assets/styles/Component.styled';
import { DisplayWrapper, Hero, HeroText, HomeContent, HomeStyled } from './Home.styled';

const Home = () => (
    <HomeStyled>
        <HomeContent>
            <Hero>Find your best friend</Hero>
            <HeroText>A better way to discover books and directly support authors</HeroText>
            <ButtonLink to="explore">Explore</ButtonLink>
        </HomeContent>
        <DisplayWrapper>
            <HomeDisplay />
        </DisplayWrapper>
    </HomeStyled>
);

export default Home;
