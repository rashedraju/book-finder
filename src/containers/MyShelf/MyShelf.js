import React from "react";
import { useBook } from "../../contexts/BookContext";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import { Section, SectionTitle } from "../../assets/styles/Component.styled";
import Empty from "../../components/Empty/Empty";

const MyShelf = () => {
    const { myShelf } = useBook();

    return (
        <Section>
            <SectionTitle>My Shelf</SectionTitle>
            {myShelf.length > 0 ? (
                <Bookshelf books={myShelf} />
            ) : (
                <Empty message="Bookshelf is empty" />
            )}
        </Section>
    );
};

export default MyShelf;
