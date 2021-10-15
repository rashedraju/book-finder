import { useState, createContext, useContext } from "react";

const BookContext = createContext();

export const useBook = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
    const [myShelf, setMyShelf] = useState([]);

    const isAddedToMyShelf = (bookId) =>
        myShelf.some((book) => book.id === bookId);

    const addToMyShelf = (book) => {
        if (!isAddedToMyShelf(book.id)) {
            setMyShelf((prev) => [...prev, book]);
            return true;
        }
        return false;
    };

    const removeFromMyShelf = (bookId) => {
        const newMyShelf = myShelf.filter((book) => book.id !== bookId);
        setMyShelf(newMyShelf);
    };

    const value = {
        myShelf,
        addToMyShelf,
        removeFromMyShelf,
        isAddedToMyShelf,
    };

    return (
        <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
};
