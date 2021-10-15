import React, { useRef } from "react";
import {
    BookshelfStyled,
    BookWrapper,
    SkeletonWrapper,
} from "./Bookshelf.styled";
import Scroller from "../Scroller/Scroller";
import Books from "./Books/Books";
import { Skeleton } from "@mui/material";

const Bookshelf = ({ books = [] }) => {
    const MAX_BOOK_PER_CELL = 5;
    const bookshelfRef = useRef();
    return (
        <BookshelfStyled>
            {books.length > MAX_BOOK_PER_CELL && (
                <Scroller
                    containerRef={bookshelfRef}
                    scrollOffset={-100}
                    left
                />
            )}
            <BookWrapper
                ref={bookshelfRef}
                center={books?.length <= MAX_BOOK_PER_CELL}
            >
                {books.length > 0 ? (
                    <Books books={books} />
                ) : (
                    new Array(4).fill(0).map((_, i) => (
                        <SkeletonWrapper key={`bookshelf-${i}`}>
                            <Skeleton
                                variant="rectangular"
                                width="90%"
                                height={220}
                                animation="wave"
                                style={{ marginBottom: 16 }}
                            />
                            <Skeleton
                                variant="text"
                                width="80%"
                                height={10}
                                animation="wave"
                                style={{ marginBottom: 6 }}
                            />
                            <Skeleton
                                variant="text"
                                width="70%"
                                height={10}
                                animation="wave"
                                style={{ marginBottom: 6 }}
                            />
                        </SkeletonWrapper>
                    ))
                )}
            </BookWrapper>
            {books.length > MAX_BOOK_PER_CELL && (
                <Scroller containerRef={bookshelfRef} scrollOffset={100} />
            )}
        </BookshelfStyled>
    );
};

export default Bookshelf;
