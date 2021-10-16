import React from 'react';
import { Section, SectionTitle } from '../../assets/styles/Component.styled';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import NotFound from '../../components/NotFound/NotFound';
import { useBook } from '../../contexts/BookContext';

const MyShelf = () => {
    const { myShelf } = useBook();

    return (
        <Section>
            <SectionTitle>My Shelf</SectionTitle>
            {myShelf.length > 0 ? (
                <Bookshelf books={myShelf} />
            ) : (
                <NotFound message="Bookshelf is empty" />
            )}
        </Section>
    );
};

export default MyShelf;
