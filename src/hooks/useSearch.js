import { useState, useCallback } from "react";
import axios from "axios";
import { removeDuplicateObjectFromArray } from "../utils/array.utils";
import { SEARCH_BY_QUERY } from "../utils/constants";

export const useSearch = () => {
    const [books, setBooks] = useState();
    const [error, setError] = useState();

    const processData = (data) => {
        const filteredData = removeDuplicateObjectFromArray(
            data.filter((book) => !!book.volumeInfo.imageLinks),
            "volumeInfo",
            "title"
        ).map((data) => {
            return {
                id: data.id,
                title: data.volumeInfo.title ?? "",
                image: data.volumeInfo.imageLinks.smallThumbnail ?? "",
                authors: data.volumeInfo.authors?.join(", ") ?? "",
                description: data.volumeInfo.description ?? "",
            };
        });

        return filteredData;
    };

    const search = useCallback(async (query, headers = {}) => {
        try {
            const response = await axios.get(
                `${SEARCH_BY_QUERY}${query}`,
                headers
            );

            setBooks(processData(response.data.items));
        } catch (error) {
            setError(error);
        }
    }, []);

    return { books, search, error };
};
