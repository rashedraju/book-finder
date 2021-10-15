import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SEARCH_BY_ID } from "../../utils/constants";
import BookPreview from "../../components/BookPreview/BookPreview";
import { Section } from "../../assets/styles/Component.styled";
import { useBook } from "../../contexts/BookContext";
import { Snackbar } from "@mui/material";

const Book = () => {
    const params = useParams();
    const [book, setBook] = useState();
    const [notification, setNotification] = useState({
        isOpen: false,
        message: "",
    });
    const { addToMyShelf, removeFromMyShelf, isAddedToMyShelf } = useBook();

    const getBookPreview = useCallback(
        async (id) => {
            try {
                const response = await axios.get(`${SEARCH_BY_ID}${id}`);

                const volume = response.data.volumeInfo;
                const bookData = {
                    id: response.data.id ?? "",
                    addedToMyShelf: isAddedToMyShelf(response.data.id),
                    title: volume.title ?? "",
                    authors: volume.authors?.join(", "),
                    image: volume.imageLinks.thumbnail ?? "",
                    description: volume.description ?? "",
                };
                setBook(bookData);
            } catch (error) {
                console.log(error);
            }
        },
        [isAddedToMyShelf]
    );

    const handleShowNotification = (message) => {
        setNotification({ isOpen: true, message });
    };

    const handleHideNotification = () => {
        setNotification({ isOpen: false, message: "" });
    };

    const handleRemoveFromMyShelf = (bookId) => {
        removeFromMyShelf(bookId);
        handleShowNotification("Successfully removed");
    };

    const handleAddToMyShelf = (book) => {
        let notificationMessage = "";

        if (addToMyShelf(book)) {
            notificationMessage = "Book is added to shelf";
        } else {
            notificationMessage = "Failed to add Book on shelf";
        }

        handleShowNotification(notificationMessage);
    };

    const handleMyShelfAction = () => {
        if (isAddedToMyShelf(book.id)) {
            handleRemoveFromMyShelf(book.id);
        } else {
            handleAddToMyShelf(book);
        }
    };

    useEffect(() => {
        getBookPreview(params.id);
    }, [params.id, getBookPreview]);

    return (
        <Section>
            <Snackbar
                open={notification.isOpen}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={3000}
                onClose={handleHideNotification}
                message={notification.message}
            />

            <BookPreview book={book} onMyShelfAction={handleMyShelfAction} />
        </Section>
    );
};

export default Book;
