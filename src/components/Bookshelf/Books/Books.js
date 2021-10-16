import React from 'react';
import { BookAuthor, BookStyled, BookTitle } from './Books.styled';

const Books = ({ books }) =>
    books.map((book) => (
        <BookStyled to={`book/${book.id}`} key={book.id}>
            <img src={book.image} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.authors}</BookAuthor>
        </BookStyled>
    ));

export default Books;
