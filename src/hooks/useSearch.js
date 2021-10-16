import axios from 'axios';
import { useCallback, useState } from 'react';
import { removeDuplicateObjectFromArray } from '../utils/array.utils';
import { SEARCH_BY_QUERY } from '../utils/constants';

export const useSearch = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState();

    const processBooks = (bookData) => {
        const filteredData = removeDuplicateObjectFromArray(
            bookData.filter((book) => !!book.volumeInfo.imageLinks),
            'volumeInfo',
            'title'
        ).map((book) => ({
            id: book.id,
            title: book.volumeInfo.title ?? '',
            image: book.volumeInfo.imageLinks.smallThumbnail ?? '',
            authors: book.volumeInfo.authors?.join(', ') ?? '',
            description: book.volumeInfo.description ?? ''
        }));

        return filteredData;
    };

    const search = useCallback(async (query, headers = {}) => {
        try {
            const response = await axios.get(`${SEARCH_BY_QUERY}${query}`, headers);

            setBooks(processBooks(response.data.items));
        } catch (err) {
            setError(err);
        }
    }, []);

    return { books, search, error };
};
